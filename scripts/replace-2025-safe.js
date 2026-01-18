const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function isTextFile(file) {
  const textExt = [
    '.js', '.jsx', '.ts', '.tsx', '.json', '.md', '.html', '.css', '.scss', '.txt', '.yml', '.yaml', '.xml', '.csv', '.py', '.rb', '.php', '.java', '.c', '.cpp', '.h'
  ];
  return textExt.includes(path.extname(file).toLowerCase());
}

function main() {
  const repoRoot = path.join(__dirname, '..');
  const files = execSync('git ls-files', { cwd: repoRoot, encoding: 'utf8' })
    .split('\n')
    .map(f => f.trim())
    .filter(Boolean);

  const skipPatterns = [
    'node_modules/', '.git/', 'public/images/', 'public/videos/', 'public/fonts/', '.next/', 'dist/', 'build/'
  ];

  const changed = [];

  for (const rel of files) {
    if (skipPatterns.some(p => rel.startsWith(p))) continue;
    if (!isTextFile(rel)) continue;
    const full = path.join(repoRoot, rel);
    let src;
    try {
      src = fs.readFileSync(full, 'utf8');
    } catch (e) {
      // skip files we can't read as utf8
      continue;
    }
    if (src.indexOf('2026') === -1) continue;
    const updated = src.replace(/2026/g, '2026');
    if (updated !== src) {
      fs.writeFileSync(full, updated, 'utf8');
      changed.push(rel);
    }
  }

  if (changed.length === 0) {
    console.log('No occurrences of 2026 found in tracked text files.');
    return 0;
  }

  console.log('Changed files:', changed.length);
  changed.forEach(f => console.log(' -', f));

  return 0;
}

if (require.main === module) process.exitCode = main();
