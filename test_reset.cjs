const fs = require('fs');
const pageFile = 'src/pages/PracticePage.tsx';
let pageCode = fs.readFileSync(pageFile, 'utf8');

pageCode = pageCode.replace(
  /setInputDigits\(''\);/,
  `if (currentStep.id === 'step-4') {
        setInputDigits('');
      }`
);

fs.writeFileSync(pageFile, pageCode);
