const fs = require('fs');

const guideFile = 'src/data/nowonFamilyCertificateGuide.ts';
let guideCode = fs.readFileSync(guideFile, 'utf8');

guideCode = guideCode.replace(
  /id: 'copy-keypad',\n\s*label: '숫자 키패드',\n\s*x: 0\.565,\n\s*y: 0\.422,\n\s*width: 0\.32,\n\s*height: 0\.32,/,
  `id: 'copy-keypad',
          label: '숫자 키패드',
          x: 0.557,
          y: 0.427,
          width: 0.332,
          height: 0.316,`
);
fs.writeFileSync(guideFile, guideCode);

const pageFile = 'src/pages/PracticePage.tsx';
let pageCode = fs.readFileSync(pageFile, 'utf8');

pageCode = pageCode.replace(
  /className="flex-1 active:bg-blue-500\/40 rounded-lg m-0\.5"/g,
  'className="flex-1 active:bg-blue-500/40 rounded-xl mx-[1.5%] my-[1.5%]"'
);

fs.writeFileSync(pageFile, pageCode);

