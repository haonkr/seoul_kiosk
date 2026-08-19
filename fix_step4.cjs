const fs = require('fs');
const guideFile = 'src/data/nowonFamilyCertificateGuide.ts';
let guideCode = fs.readFileSync(guideFile, 'utf8');

guideCode = guideCode.replace(
  /id: 'keypad',\n\s*label: '숫자 키패드',\n\s*x: 0\.557,\n\s*y: 0\.275,\n\s*width: 0\.332,\n\s*height: 0\.43,/,
  `id: 'keypad',
          label: '숫자 키패드',
          x: 0.557,
          y: 0.306,
          width: 0.332,
          height: 0.421,`
);

fs.writeFileSync(guideFile, guideCode);
