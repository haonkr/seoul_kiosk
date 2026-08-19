const fs = require('fs');
const pageFile = 'src/pages/PracticePage.tsx';
let pageCode = fs.readFileSync(pageFile, 'utf8');

const targetStr = `              onClick={(e) => {
                e.stopPropagation();
                if (isNumericStep && area.id.includes('confirm') && inputDigits.length === 0) {
                   setFeedback('먼저 숫자를 입력해 주세요.');
                   setTimeout(() => setFeedback(null), 2000);
                   return;
                }
                handleCorrectClick();
              }}`;

const replaceStr = `              onClick={(e) => {
                e.stopPropagation();
                if (isNumericStep && area.id.includes('confirm')) {
                  if (currentStep.id === 'step-4' && inputDigits.length < 13) {
                    setFeedback('주민등록번호 13자리를 모두 입력해 주세요.');
                    setTimeout(() => setFeedback(null), 2000);
                    return;
                  }
                  if (currentStep.id === 'step-11' && inputDigits.length === 0) {
                    setFeedback('먼저 숫자를 입력해 주세요.');
                    setTimeout(() => setFeedback(null), 2000);
                    return;
                  }
                }
                handleCorrectClick();
              }}`;

if (pageCode.includes(targetStr)) {
  pageCode = pageCode.replace(targetStr, replaceStr);
  fs.writeFileSync(pageFile, pageCode);
  console.log('Success');
} else {
  console.log('Target string not found');
}
