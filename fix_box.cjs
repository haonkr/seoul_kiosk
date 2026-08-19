const fs = require('fs');
const pageFile = 'src/pages/PracticePage.tsx';
let pageCode = fs.readFileSync(pageFile, 'utf8');

const displayRegex = /left: '56\.5%', top: '21%', width: '32%', height: '9%'/;
const displayReplacement = `left: '55.8%', top: '21.1%', width: '33%', height: '9%'`;

pageCode = pageCode.replace(displayRegex, displayReplacement);
fs.writeFileSync(pageFile, pageCode);
