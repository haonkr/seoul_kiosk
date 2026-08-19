const fs = require('fs');

// 1. Fix PracticePage.tsx
const pageFile = 'src/pages/PracticePage.tsx';
let pageCode = fs.readFileSync(pageFile, 'utf8');

// Fix the display logic for step-11
const displayRegex = /\{\/\* Mock input display for numbers \*\/\}[\s\S]*?(?=\<\/div\>\n      \{feedback)/;

const displayReplacement = `{/* Mock input display for numbers */}
        {isNumericStep && (
          <div 
            className={\`absolute flex items-center justify-center \${currentStep.id === 'step-4' ? 'bg-transparent' : 'bg-[#a3c9fe] border-[3px] border-[#3672e5] rounded-md'} \${currentStep.id === 'step-4' && inputDigits.length === 0 ? 'hidden' : ''}\`}
            style={
              currentStep.id === 'step-4' 
              ? { left: '4%', top: '15.5%', width: '92%', height: '9%' }
              : { left: '59.2%', top: '29.2%', width: '26.8%', height: '7.8%' }
            }
          >
            {currentStep.id === 'step-4' ? (
              <span className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest text-center w-full">
                {inputDigits.length > 6 
                   ? \`\${inputDigits.slice(0, 6)} - \${inputDigits.charAt(6)}\${'*'.repeat(inputDigits.length - 7)}\` 
                   : inputDigits}
              </span>
            ) : (
              <span className="text-[#1034a6] text-xl sm:text-2xl md:text-3xl font-bold text-center">
                {inputDigits || '\u00A0'}
              </span>
            )}
          </div>
        )}
      `;

pageCode = pageCode.replace(displayRegex, displayReplacement);

// Fix step-11 keypad area creation in PracticePage.tsx
// the code is using the bounds from targetAreas.
// We need to ensure the target area in nowonFamilyCertificateGuide.ts is updated.

fs.writeFileSync(pageFile, pageCode);

// 2. Fix nowonFamilyCertificateGuide.ts
const guideFile = 'src/data/nowonFamilyCertificateGuide.ts';
let guideCode = fs.readFileSync(guideFile, 'utf8');

guideCode = guideCode.replace(
  /id: 'copy-keypad',\n\s*label: '숫자 키패드',\n\s*x: 0\.55,\n\s*y: 0\.44,\n\s*width: 0\.32,\n\s*height: 0\.28,/,
  `id: 'copy-keypad',
          label: '숫자 키패드',
          x: 0.555,
          y: 0.47,
          width: 0.32,
          height: 0.29,`
);

fs.writeFileSync(guideFile, guideCode);

