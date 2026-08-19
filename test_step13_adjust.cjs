const fs = require('fs');
const pageFile = 'src/pages/PracticePage.tsx';
let pageCode = fs.readFileSync(pageFile, 'utf8');

pageCode = pageCode.replace(
  /left: '50%', top: '25\.6%', width: '13%', height: '6%'/,
  `left: '48%', top: '25.6%', width: '15%', height: '7%'`
);
pageCode = pageCode.replace(
  /className="text-black text-xl sm:text-2xl md:text-3xl font-bold"/,
  `className="text-black text-2xl sm:text-3xl md:text-4xl font-bold"`
);

fs.writeFileSync(pageFile, pageCode);
