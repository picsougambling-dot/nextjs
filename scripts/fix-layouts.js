const fs = require('fs');
const path = require('path');

// Trouver tous les layouts qui utilisent export const metadata
const layoutsDir = path.join(__dirname, '..', 'app', '[locale]');

function findLayoutFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...findLayoutFiles(fullPath));
    } else if (item.name === 'layout.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

const layoutFiles = findLayoutFiles(layoutsDir);

let fixedCount = 0;

for (const filePath of layoutFiles) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Vérifier si le layout utilise export const metadata sans generateMetadata
  if (content.includes('export const metadata') && !content.includes('generateMetadata')) {
    console.log(`Fixing: ${filePath}`);
    
    // Extraire le titre
    const titleMatch = content.match(/title:\s*"([^"]+)"/);
    const title = titleMatch ? titleMatch[1] : 'GigaBonus';
    
    // Extraire la description
    const descMatch = content.match(/description:\s*"([^"]+)"/);
    const description = descMatch ? descMatch[1] : 'GigaBonus - Comparateur de casinos';
    
    // Extraire le canonical
    const canonicalMatch = content.match(/canonical:\s*"https:\/\/gigabonus\.win([^"]+)"/);
    const canonical = canonicalMatch ? canonicalMatch[1] : '/';
    
    // Déterminer le nom du layout depuis le nom du fichier
    const dirName = path.dirname(filePath).split(path.sep).pop();
    const layoutName = dirName.charAt(0).toUpperCase() + dirName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase()) + 'Layout';
    
    const newContent = `import type { Metadata } from "next";
import { generateMultilingualMetadata } from "@/lib/metadata-helpers";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return generateMultilingualMetadata(locale, "${canonical}", {
    title: "${title}",
    description: "${description}",
    canonical: "${canonical}",
    ogImage: "https://gigabonus.win/og-image.png",
  });
}

export default async function ${layoutName}({ children, params }: Props) {
  await params;
  return children;
}
`;
    
    fs.writeFileSync(filePath, newContent, 'utf8');
    fixedCount++;
    console.log(`  ✓ Fixed`);
  }
}

console.log(`\n✅ Fixed ${fixedCount} layouts!`);

