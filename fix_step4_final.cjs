const fs = require('fs');
const guideFile = 'src/data/nowonFamilyCertificateGuide.ts';
let guideCode = fs.readFileSync(guideFile, 'utf8');

guideCode = guideCode.replace(
  /id: 'keypad',\n\s*label: '숫자 키패드',\n\s*x: [0-9.]+,\n\s*y: [0-9.]+,\n\s*width: [0-9.]+,\n\s*height: [0-9.]+,\n\s*shape: 'rect'/g,
  `id: 'keypad',
          label: '숫자 키패드',
          x: 0.525,
          y: 0.272,
          width: 0.425,
          height: 0.39,
          shape: 'rect'`
);

guideCode = guideCode.replace(
  /id: 'btn-confirm-jumin',\n\s*label: '확인',\n\s*x: [0-9.]+,\n\s*y: [0-9.]+,\n\s*width: [0-9.]+,\n\s*height: [0-9.]+,\n\s*shape: 'circle'/g,
  `id: 'btn-confirm-jumin',
          label: '확인',
          x: 0.795,
          y: 0.73,
          width: 0.13,
          height: 0.13,
          shape: 'circle'`
);

fs.writeFileSync(guideFile, guideCode);
