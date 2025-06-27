
const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying build output...');

const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

// Check if dist directory exists
if (!fs.existsSync(distPath)) {
  console.error('❌ Error: dist directory not found. Run "npm run build" first.');
  process.exit(1);
}

// Check if index.html exists
if (!fs.existsSync(indexPath)) {
  console.error('❌ Error: index.html not found in dist directory.');
  process.exit(1);
}

// Read and check index.html content
const indexContent = fs.readFileSync(indexPath, 'utf8');

// Check for correct base path
if (!indexContent.includes('/juhi-portfolio/')) {
  console.warn('⚠️  Warning: Base path "/juhi-portfolio/" not found in index.html');
}

// Check for assets
const assetsDir = path.join(distPath, 'assets');
if (!fs.existsSync(assetsDir)) {
  console.error('❌ Error: assets directory not found in dist.');
  process.exit(1);
}

// List files in dist
console.log('📁 Files in dist directory:');
const distFiles = fs.readdirSync(distPath);
distFiles.forEach(file => {
  const filePath = path.join(distPath, file);
  const stats = fs.statSync(filePath);
  const size = stats.isDirectory() ? '[DIR]' : `${(stats.size / 1024).toFixed(1)}KB`;
  console.log(`  ${file} ${size}`);
});

console.log('✅ Build verification completed successfully!');

