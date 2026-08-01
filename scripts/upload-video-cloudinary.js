const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;

// Load environment variables from .env.local
const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const val = match[2].trim();
      if (!process.env[key]) {
        process.env[key] = val;
      }
    }
  });
}

const cloudName = process.argv[2] || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY || '455587683264463';
const apiSecret = process.env.CLOUDINARY_API_SECRET || 'B0F8Oyd4jwX4zw-IwONCQMXQ_6o';

if (!cloudName || cloudName.includes('your_cloud_name')) {
  console.error('ERROR: Please provide your Cloudinary Cloud Name as an argument: node scripts/upload-video-cloudinary.js <your_cloud_name>');
  process.exit(1);
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
  secure: true
});

const videoPath = path.join(__dirname, '..', 'public', 'videos', 'founder-stalin-appreciation.mp4');

if (!fs.existsSync(videoPath)) {
  console.error('Video file not found at:', videoPath);
  process.exit(1);
}

console.log(`Uploading ${videoPath} to Cloudinary cloud "${cloudName}"... (This may take 10-30 seconds)`);

cloudinary.uploader.upload(
  videoPath,
  {
    resource_type: 'video',
    public_id: 'founder-stalin-appreciation',
    folder: 'kalai-decorators',
    overwrite: true
  },
  (error, result) => {
    if (error) {
      console.error('Upload Failed:', error);
      process.exit(1);
    }

    const secureUrl = result.secure_url;
    console.log('UPLOAD SUCCESSFUL!');
    console.log('Cloudinary Video URL:', secureUrl);

    // Optimize URL with f_auto, q_auto
    const optimizedUrl = secureUrl.replace('/upload/', '/upload/f_auto,q_auto/');
    console.log('Optimized Streaming URL:', optimizedUrl);

    // Update .env.local
    let envData = fs.readFileSync(envPath, 'utf8');
    envData = envData.replace(
      /# NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=.*/g,
      `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=${cloudName}`
    );
    envData = envData.replace(
      /NEXT_PUBLIC_CLOUDINARY_STALIN_VIDEO=.*/g,
      `NEXT_PUBLIC_CLOUDINARY_STALIN_VIDEO=${optimizedUrl}`
    );
    fs.writeFileSync(envPath, envData, 'utf8');

    console.log('Updated .env.local with Cloudinary Video URL!');
  }
);
