const fs = require('fs');
const guideFile = 'src/data/nowonFamilyCertificateGuide.ts';
let guideCode = fs.readFileSync(guideFile, 'utf8');

guideCode = guideCode.replace(
  /id: 'keypad',\n\s*label: '숫자 키패드',\n\s*x: 0\.51,\n\s*y: 0\.27,\n\s*width: 0\.38,\n\s*height: 0\.4,/,
  `id: 'keypad',
          label: '숫자 키패드',
          x: 0.526,
          y: 0.283,
          width: 0.435,
          height: 0.47,`
);

guideCode = guideCode.replace(
  /id: 'btn-confirm-jumin',\n\s*label: '확인',\n\s*x: 0\.80,\n\s*y: 0\.72,/,
  `id: 'btn-confirm-jumin',
          label: '확인',
          x: 0.803,
          y: 0.816,`
);

fs.writeFileSync(guideFile, guideCode);
