# Script pour corriger toutes les pages avis-* dans blog
$files = Get-ChildItem -Path "app\[locale]\blog\avis-*" -Filter "page.tsx" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $modified = $false
    
    # Vérifier si useLocale n'est pas importé
    if ($content -notmatch "import.*useLocale.*from 'next-intl'") {
        # Ajouter l'import useLocale après l'import Link
        if ($content -match "(import Link from 'next/link';)") {
            $content = $content -replace "($1)", "`$1`nimport { useLocale } from 'next-intl';"
            $modified = $true
        }
    }
    
    # Vérifier si locale n'est pas défini dans la fonction
    if ($content -match "export default function (\w+)\(\) \{") {
        $functionName = $Matches[1]
        
        if ($content -notmatch "const locale = useLocale\(\);") {
            # Ajouter const locale = useLocale(); après l'ouverture de la fonction
            $pattern = "(export default function $functionName\(\) \{)"
            $replacement = "`$1`n  const locale = useLocale();"
            $content = $content -replace $pattern, $replacement
            $modified = $true
        }
    }
    
    # Corriger les href="/blog" vers href={`/${locale}/blog`}
    if ($content -match 'href="/blog"') {
        $content = $content -replace 'href="/blog"', 'href={`/${locale}/blog`}'
        $modified = $true
    }
    
    # Corriger les href="/casino-name" vers href={`/${locale}/casino-name`}
    # Exclure les liens externes (http/https) et les liens avec déjà une locale
    $content = $content -replace 'href="/([^"]+)"', {
        param($match)
        $path = $match.Groups[1].Value
        # Ne pas modifier si c'est déjà avec locale, ou si c'est un lien externe, ou si c'est vide
        if ($path -notmatch '^(fr|en|de|es|ru)/' -and $path -notmatch '^https?://' -and $path -ne '') {
            "href={`/${locale}/$path`}"
        } else {
            $match.Value
        }
    }
    $modified = $true
    
    if ($modified) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Corrige: $($file.Name)"
    }
}

Write-Host "Termine!"

