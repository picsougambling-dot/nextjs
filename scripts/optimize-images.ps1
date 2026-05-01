# Script PowerShell pour optimiser les images
# PRÉREQUIS : ImageMagick ou Sharp CLI (npm install -g sharp-cli)

Write-Host "=== Optimisation des images ===" -ForegroundColor Cyan
Write-Host ""

# Vérifier si ImageMagick est disponible
$hasImageMagick = Get-Command magick -ErrorAction SilentlyContinue
$hasSharp = Get-Command sharp -ErrorAction SilentlyContinue

if (-not $hasImageMagick -and -not $hasSharp) {
    Write-Host "⚠️  Aucun outil d'optimisation d'images détecté" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Options d'installation :" -ForegroundColor Yellow
    Write-Host "1. ImageMagick : https://imagemagick.org/script/download.php" -ForegroundColor Yellow
    Write-Host "2. Sharp CLI : npm install -g sharp-cli" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "OU utiliser un outil en ligne :" -ForegroundColor Yellow
    Write-Host "- https://squoosh.app/ (recommandé)" -ForegroundColor Yellow
    Write-Host "- https://convertio.co/png-webp/" -ForegroundColor Yellow
    exit 1
}

# 1. Convertir diamond.png en WebP (128x128)
Write-Host "🔄 Conversion : diamond.png → diamond.webp (128x128)" -ForegroundColor Cyan

if ($hasImageMagick) {
    $command = "magick `"public\diamond.png`" -resize 128x128 -quality 85 `"public\diamond.webp`""
    Invoke-Expression $command
} elseif ($hasSharp) {
    $command = "sharp -i `"public\diamond.png`" -o `"public\diamond.webp`" --resize 128 128 --webp quality=85"
    Invoke-Expression $command
}

if (Test-Path "public\diamond.webp") {
    $originalSize = (Get-Item "public\diamond.png").Length / 1KB
    $newSize = (Get-Item "public\diamond.webp").Length / 1KB
    Write-Host "   ✅ Succès : $([math]::Round($originalSize, 1)) KiB → $([math]::Round($newSize, 1)) KiB" -ForegroundColor Green
} else {
    Write-Host "   ❌ Échec" -ForegroundColor Red
}

Write-Host ""

# 2. Optimiser kingschance.webp (réduire dimensions et compression)
Write-Host "🔄 Optimisation : kingschance.webp (490x196, quality 75)" -ForegroundColor Cyan

if ($hasImageMagick) {
    $command = "magick `"public\images\kingschance.webp`" -resize 490x196 -quality 75 `"public\images\kingschance-optimized.webp`""
    Invoke-Expression $command
    if (Test-Path "public\images\kingschance-optimized.webp") {
        Move-Item -Force "public\images\kingschance-optimized.webp" "public\images\kingschance.webp"
    }
} elseif ($hasSharp) {
    $command = "sharp -i `"public\images\kingschance.webp`" -o `"public\images\kingschance.webp`" --resize 490 196 --webp quality=75"
    Invoke-Expression $command
}

if (Test-Path "public\images\kingschance.webp") {
    Write-Host "   ✅ Succès" -ForegroundColor Green
} else {
    Write-Host "   ❌ Échec" -ForegroundColor Red
}

Write-Host ""
Write-Host "✅ Optimisation terminée" -ForegroundColor Green
