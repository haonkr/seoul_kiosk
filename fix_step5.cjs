const fs = require('fs');
const guideFile = 'src/data/nowonFamilyCertificateGuide.ts';
let guideCode = fs.readFileSync(guideFile, 'utf8');

const targetStr = `      targetAreas: [
        {
          id: 'fingerprint-guide',
          label: '지문인식 안내 그림',
          x: 0.3,
          y: 0.23,
          width: 0.2,
          height: 0.35,
          shape: 'rect'
        },
        {
          id: 'fingerprint-scanner',
          label: '실제 지문인식기 위치',
          x: 0.65,
          y: 0.85,
          width: 0.2,
          height: 0.15,
          shape: 'rect'
        }
      ],`;

const replaceStr = `      targetAreas: [
        {
          id: 'fingerprint-scanner',
          label: '실제 지문인식기 위치',
          x: 0.77,
          y: 0.825,
          width: 0.11,
          height: 0.165,
          shape: 'rect'
        }
      ],`;

if (guideCode.includes(targetStr)) {
  guideCode = guideCode.replace(targetStr, replaceStr);
  fs.writeFileSync(guideFile, guideCode);
  console.log('Success');
} else {
  console.log('Target string not found');
}
