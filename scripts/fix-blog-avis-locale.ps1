# Script pour ajouter useLocale() et corriger les liens dans toutes les pages avis-*

$files = Get-ChildItem -Path "app\[locale]\blog\avis-*" -Filter "page.tsx" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    $modified = $false
    
    # 1. Ajouter l'import useLocale si absent
    if ($content -notmatch "import.*useLocale.*from 'next-intl'") {
        if ($content -match "(import Link from 'next/link';)") {
            $content = $content -replace "($1)", "`$1`nimport { useLocale } from 'next-intl';"
            $modified = $true
        }
    }
    
    # 2. Ajouter const locale = useLocale(); dans la fonction
    if ($content -match "export default function (\w+)\(\) \{") {
        $functionName = $Matches[1]
        
        if ($content -notmatch "const locale = useLocale\(\);") {
            # Trouver la ligne après l'ouverture de la fonction
            $pattern = "(export default function $functionName\(\) \{)"
            if ($content -match "$pattern\s*") {
                $content = $content -replace "$pattern", "`$1`n  const locale = useLocale();"
                $modified = $true
            }
        }
    }
    
    # 3. Corriger les href="/blog" vers href={`/${locale}/blog`}
    if ($content -match 'href="/blog"') {
        $content = $content -replace 'href="/blog"', 'href={`/${locale}/blog`}'
        $modified = $true
    }
    
    # 4. Corriger les autres href="/path" vers href={`/${locale}/path`}
    # Exclure les liens externes et ceux qui ont déjà une locale
    $content = $content -replace 'href="/([^"]+)"', {
        param($match)
        $path = $match.Groups[1].Value
        # Ne pas modifier si:
        # - Déjà avec locale (fr/en/de/es/ru)
        # - Lien externe (http/https)
        # - Vide
        if ($path -notmatch '^(fr|en|de|es|ru)/' -and $path -notmatch '^https?://' -and $path -ne '') {
            "href={`/${locale}/$path`}"
        } else {
            $match.Value
        }
    }
    $modified = $true
    
    if ($modified -and $content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -NoNewline -Encoding UTF8
        Write-Host "Corrige: $($file.Name)"
    }
}

Write-Host "`nTermine!"

