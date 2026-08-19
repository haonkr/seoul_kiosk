const fs = require('fs');
const pageFile = 'src/pages/PracticePage.tsx';
let pageCode = fs.readFileSync(pageFile, 'utf8');

pageCode = pageCode.replace(
  /className="text-black text-2xl sm:text-3xl md:text-4xl font-bold"/,
  `className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold"`
);

fs.writeFileSync(pageFile, pageCode);
