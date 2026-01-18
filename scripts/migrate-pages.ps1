$appDir = "app"
$localeDir = "app\[locale]"
$excludeDirs = @("[locale]", "globals.css", "sitemap.ts", "robots.ts", "not-found.tsx", "page.tsx", "layout.tsx")

# Créer le dossier [locale] s'il n'existe pas
if (-not (Test-Path $localeDir)) {
    New-Item -ItemType Directory -Path $localeDir -Force
}

# Fonction récursive pour copier les dossiers
function Copy-Directory {
    param(
        [string]$Source,
        [string]$Destination
    )
    
    if (-not (Test-Path $Destination)) {
        New-Item -ItemType Directory -Path $Destination -Force
    }
    
    $items = Get-ChildItem -Path $Source -Force
    
    foreach ($item in $items) {
        if ($excludeDirs -contains $item.Name) {
            continue
        }
        
        $destPath = Join-Path $Destination $item.Name
        
        if ($item.PSIsContainer) {
            Copy-Directory -Source $item.FullName -Destination $destPath
        } else {
            Copy-Item -Path $item.FullName -Destination $destPath -Force
        }
    }
}

# Copier tous les dossiers de app/ vers app/[locale]/
$items = Get-ChildItem -Path $appDir -Directory -Force

foreach ($item in $items) {
    if ($excludeDirs -contains $item.Name) {
        continue
    }
    
    $destPath = Join-Path $localeDir $item.Name
    Write-Host "Copying $($item.Name)..."
    Copy-Directory -Source $item.FullName -Destination $destPath
}

Write-Host "Migration completed!"

