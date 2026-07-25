const fs = require('fs');
const path = require('path');

const clientBase = path.join(__dirname, '..', 'public', 'images', 'client');

const subfolders = [
  { folder: 'important', prefix: 'important' },
  { folder: 'cm-stalin', prefix: 'stalin-set' },
  { folder: 'marriage', prefix: 'wedding-set' },
  { folder: 'temple', prefix: 'temple-set' },
  { folder: 'christmas', prefix: 'christmas-set' },
  { folder: 'pongal', prefix: 'pongal-set' },
  { folder: 'behind-scenes', prefix: 'behind-work' },
  { folder: 'gallery', prefix: 'real-event' },
  { folder: 'stalin-important-set', prefix: 'sis' },
  { folder: 'new-folder-2', prefix: 'nf2' },
  { folder: 'new-folder-3', prefix: 'nf3' },
  { folder: 'folder-1', prefix: 'f1' },
  { folder: 'folder-3', prefix: 'f3' }
];

subfolders.forEach(({ folder, prefix }) => {
  const dirPath = path.join(clientBase, folder);
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath).filter(f => !f.startsWith('.'));
  
  files.forEach((file, idx) => {
    const ext = path.extname(file);
    const newName = `${prefix}-${String(idx + 1).padStart(2, '0')}${ext}`;
    const oldPath = path.join(dirPath, file);
    const newPath = path.join(dirPath, newName);
    fs.renameSync(oldPath, newPath);
  });
  console.log(`Standardized ${files.length} images in ${folder} -> prefix: ${prefix}`);
});

console.log('All client Yogesh images successfully renamed and standardized!');
