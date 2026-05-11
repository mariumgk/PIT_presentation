const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'src', 'slides');
const files = fs.readdirSync(slidesDir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/fontSize:\s*'([0-1]\.[0-9]+)rem'/g, (match, size) => {
    let s = parseFloat(size);
    if (s < 1.2) {
      s += 0.15;
      return `fontSize: '${s.toFixed(2).replace(/\.?0+$/, '')}rem'`;
    }
    return match;
  });

  fs.writeFileSync(filePath, content, 'utf8');
}
console.log('Font sizes updated in slides.');

// Also update index.css
const cssPath = path.join(__dirname, 'src', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');
cssContent = cssContent.replace(/font-size:\s*([0-1]\.[0-9]+)rem;/g, (match, size) => {
  let s = parseFloat(size);
  if (s < 1.2) {
    s += 0.15;
    return `font-size: ${s.toFixed(2).replace(/\.?0+$/, '')}rem;`;
  }
  return match;
});
fs.writeFileSync(cssPath, cssContent, 'utf8');
console.log('Font sizes updated in index.css');
