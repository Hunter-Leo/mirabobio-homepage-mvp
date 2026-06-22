const fs = require('fs');
const path = require('path');

// 使用 Git commit SHA 或时间戳作为版本号
const version = process.env.CF_PAGES_COMMIT_SHA?.substring(0, 7) || Date.now().toString();

console.log(`Building with version: ${version}`);

// 创建 dist 目录
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// 复制 assets 目录
const assetsDir = path.join(__dirname, 'assets');
const distAssetsDir = path.join(distDir, 'assets');
if (fs.existsSync(assetsDir)) {
  fs.cpSync(assetsDir, distAssetsDir, { recursive: true });
  console.log('✓ Copied assets/');
}

// 复制其他必要文件
const filesToCopy = ['_headers', 'robots.txt', 'sitemap.xml'];
filesToCopy.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✓ Copied ${file}`);
  }
});

// 复制 locales 目录（i18n 翻译文件）
const localesDir = path.join(__dirname, 'locales');
const distLocalesDir = path.join(distDir, 'locales');
if (fs.existsSync(localesDir)) {
  fs.cpSync(localesDir, distLocalesDir, { recursive: true });
  console.log('✓ Copied locales/');
}

// 处理 HTML 文件
const htmlFiles = [
  'index.html',
  'about.html',
  'platform.html',
  'solutions.html',
  'contact.html'
];

htmlFiles.forEach(file => {
  const srcPath = path.join(__dirname, file);
  const destPath = path.join(distDir, file);
  
  if (!fs.existsSync(srcPath)) {
    console.log(`Skipping ${file} (not found)`);
    return;
  }
  
  let content = fs.readFileSync(srcPath, 'utf8');
  
  // 替换 CSS 引用，添加版本号
  content = content.replace(
    /href="assets\/css\/([^"?]+\.css)(\?v=[^"]*)?"/g,
    `href="assets/css/$1?v=${version}"`
  );
  
  // 替换 JS 引用，添加版本号
  content = content.replace(
    /src="assets\/js\/([^"?]+\.js)(\?v=[^"]*)?"/g,
    `src="assets/js/$1?v=${version}"`
  );
  
  // 替换所有图片引用，添加版本号（svg, jpg, png, webp, gif）
  content = content.replace(
    /src="assets\/images\/([^"?]+\.(svg|jpg|jpeg|png|webp|gif))(\?v=[^"]*)?"/g,
    `src="assets/images/$1?v=${version}"`
  );
  
  // 替换所有视频引用，添加版本号（mp4, webm, ogg）
  content = content.replace(
    /src="assets\/videos\/([^"?]+\.(mp4|webm|ogg))(\?v=[^"]*)?"/g,
    `src="assets/videos/$1?v=${version}"`
  );
  
  fs.writeFileSync(destPath, content);
  console.log(`✓ Processed ${file}`);
});

console.log(`\nBuild complete! Output in dist/ with version ${version}`);
