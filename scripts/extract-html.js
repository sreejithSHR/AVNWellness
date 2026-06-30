// Regenerates app/homepageHtml.js and app/adminHtml.js from src/index.html / src/admin.html.
// Run with:  node scripts/extract-html.js
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

function bodyInner(html) {
  return html.replace(/[\s\S]*<body[^>]*>/, '').replace(/<\/body>[\s\S]*/, '');
}
function clean(s) {
  return s
    .replace(/\s*<script src="\.\/assets\/js\/[^"]+"[^>]*><\/script>/g, '')
    .replace(/"\.\/assets\//g, '"/assets/')
    .replace(/'\.\/assets\//g, "'/assets/")
    .replace(/url\('\.\/assets\//g, "url('/assets/")
    .replace(/url\("\.\/assets\//g, 'url("/assets/')
    .trim();
}
function toModule(name, html) {
  const e = html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  return `export const ${name} = \`\n${e}\n\`;\n`;
}

const idx = fs.readFileSync(path.join(ROOT, 'src/index.html'), 'utf8');
const adm = fs.readFileSync(path.join(ROOT, 'src/admin.html'), 'utf8');
fs.writeFileSync(path.join(ROOT, 'app/homepageHtml.js'), toModule('homepageHtml', clean(bodyInner(idx))));
fs.writeFileSync(path.join(ROOT, 'app/adminHtml.js'), toModule('adminHtml', clean(bodyInner(adm))));
console.log('Regenerated app/homepageHtml.js and app/adminHtml.js');
