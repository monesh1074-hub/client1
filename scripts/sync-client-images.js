const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'client1', 'client yogesh webpage');
const dstDir = path.join(__dirname, '..', 'public', 'images', 'client');

console.log('--- SYNCING CLIENT YOGESH IMAGES ---');
console.log('Source:', srcDir);
console.log('Destination:', dstDir);

// 1. Clean destination folder completely to remove stale photos & folders
if (fs.existsSync(dstDir)) {
  fs.rmSync(dstDir, { recursive: true, force: true });
}
fs.mkdirSync(dstDir, { recursive: true });

// 2. Define category mappings from client1/client yogesh webpage folders to public/images/client folders
const categories = [
  { folder: 'important to add', target: 'important', prefix: 'important' },
  { folder: 'cm stalin sets', target: 'cm-stalin', prefix: 'stalin-set' },
  { folder: 'marriage event set', target: 'marriage', prefix: 'wedding-set' },
  { folder: 'temple sets', target: 'temple', prefix: 'temple-set' },
  { folder: 'cristmas set on dmk', target: 'christmas', prefix: 'christmas-set' },
  { folder: 'pongal set on dmk', target: 'pongal', prefix: 'pongal-set' },
  { folder: 'beind the work', target: 'behind-scenes', prefix: 'behind-work' },
  { folder: 'stalin important set for card portfolio', target: 'stalin-important-set', prefix: 'sis' },
  { folder: 'New folder (2)', target: 'new-folder-2', prefix: 'nf2' },
  { folder: 'New folder (3)', target: 'new-folder-3', prefix: 'nf3' },
  { folder: '1', target: 'folder-1', prefix: 'f1' },
  { folder: '3', target: 'folder-3', prefix: 'f3' },
  { folder: 'DMK MANADU', target: 'dmk-manadu', prefix: 'dmk-manadu' },
  { folder: 'gollu', target: 'gollu', prefix: 'gollu-set' }
];

// Dynamically find founder appreciation folder (handles spelling variations)
const allSubdirs = fs.readdirSync(srcDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

const founderFolderOnDisk = allSubdirs.find(d => 
  d.toLowerCase().includes('founder') || 
  d.toLowerCase().includes('aprishate') || 
  d.toLowerCase().includes('master movie')
);

if (founderFolderOnDisk) {
  categories.push({ 
    folder: founderFolderOnDisk, 
    target: 'founder-appreciation', 
    prefix: 'appreciation' 
  });
}

categories.forEach(({ folder, target, prefix }) => {
  const s = path.join(srcDir, folder);
  const d = path.join(dstDir, target);

  if (fs.existsSync(s)) {
    fs.mkdirSync(d, { recursive: true });
    const files = fs.readdirSync(s)
      .filter(f => !f.startsWith('.') && !f.endsWith('.mp4'))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

    files.forEach((file, idx) => {
      const ext = path.extname(file) || '.jpeg';
      const newName = `${prefix}-${String(idx + 1).padStart(2, '0')}${ext}`;
      const srcPath = path.join(s, file);
      const dstPath = path.join(d, newName);
      fs.copyFileSync(srcPath, dstPath);
    });

    console.log(`[OK] '${folder}' -> '${target}': ${files.length} images standardized (${prefix}-01..${files.length})`);
  } else {
    console.warn(`[WARN] Folder not found: '${folder}'`);
  }
});

// 3. Sync Videos
const videoDst = path.join(__dirname, '..', 'public', 'videos');
fs.mkdirSync(videoDst, { recursive: true });
if (founderFolderOnDisk) {
  const founderFolderPath = path.join(srcDir, founderFolderOnDisk);
  const videoFiles = fs.readdirSync(founderFolderPath).filter(f => f.endsWith('.mp4'));
  videoFiles.forEach((vFile) => {
    const srcV = path.join(founderFolderPath, vFile);
    const dstV = path.join(videoDst, 'founder-stalin-appreciation.mp4');
    fs.copyFileSync(srcV, dstV);
    console.log(`[OK] Synced video '${vFile}' -> 'public/videos/founder-stalin-appreciation.mp4'`);
  });
}

// 4. Copy root gallery images
const galleryDst = path.join(dstDir, 'gallery');
fs.mkdirSync(galleryDst, { recursive: true });

const rootFiles = fs.readdirSync(srcDir, { withFileTypes: true })
  .filter(e => !e.isDirectory() && !e.name.startsWith('.'))
  .map(e => e.name)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

rootFiles.forEach((file, index) => {
  const ext = path.extname(file) || '.jpeg';
  const srcP = path.join(srcDir, file);
  const dstP = path.join(galleryDst, `real-event-${String(index + 1).padStart(2, '0')}${ext}`);
  fs.copyFileSync(srcP, dstP);
});

console.log(`[OK] Copied ${rootFiles.length} root gallery images to 'gallery' (real-event-01..${rootFiles.length})`);
console.log('Successfully synced and standardized all client Yogesh photos & videos!');
