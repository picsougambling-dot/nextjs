# Script PowerShell pour convertir les GIF de popup en MP4
# PRÉREQUIS : ffmpeg doit être installé et dans le PATH
# Installation : https://ffmpeg.org/download.html

Write-Host "=== Conversion GIF → MP4 pour optimiser les performances ===" -ForegroundColor Cyan
Write-Host ""

# Vérifier si ffmpeg est disponible
if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
    Write-Host "❌ ERREUR : ffmpeg n'est pas installé ou pas dans le PATH" -ForegroundColor Red
    Write-Host ""
    Write-Host "Pour installer ffmpeg sur Windows :" -ForegroundColor Yellow
    Write-Host "1. Télécharger depuis : https://ffmpeg.org/download.html" -ForegroundColor Yellow
    Write-Host "2. Extraire dans un dossier (ex: C:\ffmpeg)" -ForegroundColor Yellow
    Write-Host "3. Ajouter au PATH système" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "OU utiliser Chocolatey : choco install ffmpeg" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ ffmpeg détecté" -ForegroundColor Green
Write-Host ""

# Liste des GIF à convertir
$gifs = @(
    @{ input = "src\assets\popup-kingschance.gif"; output = "src\assets\popup-kingschance.mp4" },
    @{ input = "src\assets\popup-luckytreasure.gif"; output = "src\assets\popup-luckytreasure.mp4" },
    @{ input = "src\assets\popup-spindinasty.gif"; output = "src\assets\popup-spindinasty.mp4" },
    @{ input = "src\assets\popup-spinaura.gif"; output = "src\assets\popup-spinaura.mp4" },
    @{ input = "src\assets\popup-bonus.gif"; output = "src\assets\popup-bonus.mp4" }
)

$successCount = 0
$failCount = 0

foreach ($gif in $gifs) {
    $inputPath = $gif.input
    $outputPath = $gif.output
    
    if (-not (Test-Path $inputPath)) {
        Write-Host "⚠️  Fichier introuvable : $inputPath" -ForegroundColor Yellow
        $failCount++
        continue
    }
    
    Write-Host "🔄 Conversion : $(Split-Path $inputPath -Leaf) → $(Split-Path $outputPath -Leaf)" -ForegroundColor Cyan
    
    # Commande ffmpeg pour convertir GIF en MP4 optimisé
    # -vf scale=800:-1 : redimensionner à 800px de largeur (ajuster si nécessaire)
    # -c:v libx264 : codec vidéo H.264
    # -preset slow : meilleure compression (plus lent mais plus petit)
    # -crf 28 : qualité (18-28 recommandé, 28 = plus compressé)
    # -an : pas d'audio (les GIF n'ont pas d'audio)
    # -movflags +faststart : optimise pour streaming web
    $ffmpegCommand = "ffmpeg -i `"$inputPath`" -vf `"scale=800:-1:flags=lanczos`" -c:v libx264 -preset slow -crf 28 -an -movflags +faststart -y `"$outputPath`""
    
    try {
        Invoke-Expression $ffmpegCommand 2>&1 | Out-Null
        
        if (Test-Path $outputPath) {
            $inputSize = (Get-Item $inputPath).Length / 1KB
            $outputSize = (Get-Item $outputPath).Length / 1KB
            $savings = $inputSize - $outputSize
            $savingsPercent = [math]::Round(($savings / $inputSize) * 100, 1)
            
            Write-Host "   ✅ Succès : $([math]::Round($inputSize, 1)) KiB → $([math]::Round($outputSize, 1)) KiB (économie: $([math]::Round($savings, 1)) KiB, -$savingsPercent%)" -ForegroundColor Green
            $successCount++
        } else {
            Write-Host "   ❌ Échec : fichier de sortie non créé" -ForegroundColor Red
            $failCount++
        }
    } catch {
        Write-Host "   ❌ Erreur : $_" -ForegroundColor Red
        $failCount++
    }
    
    Write-Host ""
}

Write-Host "=== Résumé ===" -ForegroundColor Cyan
Write-Host "✅ Conversions réussies : $successCount" -ForegroundColor Green
Write-Host "❌ Conversions échouées : $failCount" -ForegroundColor $(if ($failCount -eq 0) { "Green" } else { "Red" })
Write-Host ""
Write-Host "📝 PROCHAINE ÉTAPE : Modifier le code pour utiliser les MP4 au lieu des GIF" -ForegroundColor Yellow
