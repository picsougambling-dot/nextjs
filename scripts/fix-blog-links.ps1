# Script PowerShell pour corriger tous les liens dans les pages blog/avis-*
# Ajoute useLocale() et corrige les href pour préserver la locale

$blogFiles = Get-ChildItem -Path "app\[locale]\blog\avis-*" -Filter "page.tsx" -Recurse

foreach ($file in $blogFiles) {
    $content = Get-Content $file.FullName -Raw
    $modified = $false
    
    # Vérifier si useLocale n'est pas importé
    if ($content -notmatch "import.*useLocale.*from 'next-intl'") {
        # Ajouter l'import useLocale après les autres imports
        if ($content -match "(import.*from ['\`"]next/link['\`"];)") {
            $content = $content -replace "($1)", "`$1`nimport { useLocale } from 'next-intl';"
            $modified = $true
        }
    }
    
    # Vérifier si locale n'est pas défini dans la fonction
    if ($content -match "export default function (\w+)\(\) \{") {
        $functionName = $Matches[1]
        $functionStart = $content -match "(export default function $functionName\(\) \{)"
        
        if ($content -notmatch "const locale = useLocale\(\);") {
            # Ajouter const locale = useLocale(); après l'ouverture de la fonction
            $content = $content -replace "(export default function $functionName\(\) \{)", "`$1`n  const locale = useLocale();"
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
        # Ne pas modifier si c'est déjà avec locale, ou si c'est un lien externe
        if ($path -notmatch '^(fr|en|de|es|ru)/' -and $path -notmatch '^https?://') {
            "href={`/${locale}/$path`}"
        } else {
            $match.Value
        }
    }
    $modified = $true
    
    if ($modified) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "✓ Corrigé: $($file.Name)"
    } else {
        Write-Host "○ Déjà OK: $($file.Name)"
    }
}

Write-Host "`nTerminé !"

