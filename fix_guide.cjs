const fs = require('fs');
const guideFile = 'src/pages/GuidePage.tsx';
let guideCode = fs.readFileSync(guideFile, 'utf8');

const targetStr = `  // If completion step, redirect to completion page for better specialized UI
  if (isCompletion) {
    navigate('/district/nowon/family-certificate/completion', { replace: true });
    return null;
  }`;

const replaceStr = `  useEffect(() => {
    if (isCompletion) {
      navigate('/district/nowon/family-certificate/completion', { replace: true });
    }
  }, [isCompletion, navigate]);

  // If completion step, redirect to completion page for better specialized UI
  if (isCompletion) {
    return null;
  }`;

if (guideCode.includes(targetStr)) {
  guideCode = guideCode.replace(targetStr, replaceStr);
  fs.writeFileSync(guideFile, guideCode);
  console.log('Success');
} else {
  console.log('Target string not found');
}
