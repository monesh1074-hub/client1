const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'client1', 'client yogesh webpage');
const destDir = path.join(__dirname, '..', 'public', 'images', 'portfolio');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

if (fs.existsSync(srcDir)) {
  const files = fs.readdirSync(srcDir);
  let count = 0;

  files.forEach((file) => {
    if (file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png')) {
      count++;
      const paddedNum = String(count).padStart(2, '0');
      const ext = path.extname(file);
      const newFilename = `kalai-event-${paddedNum}${ext}`;
      fs.copyFileSync(path.join(srcDir, file), path.join(destDir, newFilename));
    }
  });

  console.log(`Successfully copied ${count} project images to ${destDir}`);
} else {
  console.error(`Source directory not found: ${srcDir}`);
}
