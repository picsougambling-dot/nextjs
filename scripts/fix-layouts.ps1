# Script PowerShell pour corriger tous les layouts qui n'utilisent pas generateMetadata avec params

$layoutFiles = Get-ChildItem -Path "app\[locale]" -Filter "layout.tsx" -Recurse | Where-Object { 
    $content = Get-Content $_.FullName -Raw
    # Trouver les layouts qui utilisent export const metadata au lieu de generateMetadata
    $content -match "export const metadata" -and $content -notmatch "generateMetadata"
}

foreach ($file in $layoutFiles) {
    Write-Host "Processing: $($file.FullName)"
    
    $content = Get-Content $file.FullName -Raw
    $relativePath = $file.FullName -replace [regex]::Escape((Get-Location).Path + "\"), ""
    $pathWithoutLocale = $relativePath -replace "app\\\[locale\]\\", "" -replace "\\layout\.tsx$", ""
    
    # Extraire le titre et la description depuis le metadata existant
    if ($content -match 'title:\s*"([^"]+)"') {
        $title = $matches[1]
    } else {
        $title = "GigaBonus"
    }
    
    if ($content -match 'description:\s*"([^"]+)"') {
        $description = $matches[1]
    } else {
        $description = "GigaBonus - Comparateur de casinos"
    }
    
    # Extraire le canonical
    if ($content -match 'canonical:\s*"https://gigabonus\.win([^"]+)"') {
        $canonical = $matches[1]
    } else {
        $canonical = "/$pathWithoutLocale"
    }
    
    # Créer le nouveau contenu
    $titleEscaped = $title -replace '"', '\"'
    $descriptionEscaped = $description -replace '"', '\"'
    
    $newContent = "import type { Metadata } from `"next`";`n" +
                  "import { generateMultilingualMetadata } from `"@/lib/metadata-helpers`";`n`n" +
                  "type Props = {`n" +
                  "  children: React.ReactNode;`n" +
                  "  params: Promise<{ locale: string }>;`n" +
                  "};`n`n" +
                  "export async function generateMetadata({ params }: Props): Promise<Metadata> {`n" +
                  "  const { locale } = await params;`n`n" +
                  "  return generateMultilingualMetadata(locale, `"$canonical`", {`n" +
                  "    title: `"$titleEscaped`",`n" +
                  "    description: `"$descriptionEscaped`",`n" +
                  "    canonical: `"$canonical`",`n" +
                  "    ogImage: `"https://gigabonus.win/og-image.png`",`n" +
                  "  });`n" +
                  "}`n`n" +
                  "export default async function Layout({ children, params }: Props) {`n" +
                  "  await params;`n" +
                  "  return children;`n" +
                  "}`n"
    
    Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
    Write-Host "  ✓ Fixed: $($file.Name)"
}

Write-Host "`nAll layouts have been fixed!"

