#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const EXCLUDE = new Set(['.git', 'node_modules', 'public/videos', 'public/images', '.cursor']);

function shouldExclude(p) {
  for (const ex of EXCLUDE) {
    if (p.includes(path.sep + ex + path.sep) || p.endsWith(path.sep + ex) || p.includes(ex + path.sep)) return true;
  }
  return false;
}

function walk(dir, cb) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (shouldExclude(full)) continue;
    if (e.isDirectory()) walk(full, cb);
    else cb(full);
  }
}

const changed = [];
walk(ROOT, (file) => {
  if (!file.startsWith(ROOT)) return;
  const skipExt = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.ico', '.wasm', '.mp4', '.mov', '.zip'];
  const ext = path.extname(file).toLowerCase();
  if (skipExt.includes(ext)) return;
  let stat;
  try { stat = fs.statSync(file); } catch { return; }
  if (stat.size > 200 * 1024) return;

  let text;
  try { text = fs.readFileSync(file, 'utf8'); } catch { return; }
  if (text.includes('2026')) {
    const newText = text.split('2026').join('2026');
    fs.writeFileSync(file, newText, 'utf8');
    changed.push(file.replace(ROOT + path.sep, ''));
  }
});

if (changed.length === 0) {
  console.log('No files changed.');
  process.exit(0);
}

console.log('Updated files:');
changed.forEach(f => console.log('- ' + f));
console.log('\nTotal files updated: ' + changed.length);
process.exit(0);
