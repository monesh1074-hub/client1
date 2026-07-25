const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'client1', 'client yogesh webpage');
const dstDir = path.join(__dirname, '..', 'public', 'images', 'client');

function copyDir(src, dst) {
  if (!fs.existsSync(dst)) {
    fs.mkdirSync(dst, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const dstPath = path.join(dst, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, dstPath);
    } else {
      fs.copyFileSync(srcPath, dstPath);
    }
  }
}

console.log('Copying client Yogesh images from:', srcDir);
console.log('Destination:', dstDir);

// Define category mappings
const categories = [
  { folder: 'important to add', target: 'important' },
  { folder: 'cm stalin sets', target: 'cm-stalin' },
  { folder: 'marriage event set', target: 'marriage' },
  { folder: 'temple sets', target: 'temple' },
  { folder: 'cristmas set on dmk', target: 'christmas' },
  { folder: 'pongal set on dmk', target: 'pongal' },
  { folder: 'beind the work', target: 'behind-scenes' },
  { folder: 'stalin important set for card portfolio', target: 'stalin-important-set' },
  { folder: 'New folder (2)', target: 'new-folder-2' },
  { folder: 'New folder (3)', target: 'new-folder-3' },
  { folder: '1', target: 'folder-1' },
  { folder: '3', target: 'folder-3' }
];

categories.forEach(({ folder, target }) => {
  const s = path.join(srcDir, folder);
  const d = path.join(dstDir, target);
  if (fs.existsSync(s)) {
    copyDir(s, d);
    console.log(`Copied ${folder} -> ${target}`);
  }
});

// Also copy root images to gallery
const galleryDst = path.join(dstDir, 'gallery');
if (!fs.existsSync(galleryDst)) {
  fs.mkdirSync(galleryDst, { recursive: true });
}

const rootFiles = fs.readdirSync(srcDir, { withFileTypes: true })
  .filter(e => !e.isDirectory() && e.name.endsWith('.jpeg'))
  .slice(0, 40);

rootFiles.forEach((file, index) => {
  const srcP = path.join(srcDir, file.name);
  const dstP = path.join(galleryDst, `client-gallery-${String(index + 1).padStart(2, '0')}.jpeg`);
  fs.copyFileSync(srcP, dstP);
});

console.log(`Copied ${rootFiles.length} root gallery images.`);
console.log('Successfully organized all client Yogesh images!');
