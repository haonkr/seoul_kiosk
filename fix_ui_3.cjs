const fs = require('fs');

const pageFile = 'src/pages/PracticePage.tsx';
let pageCode = fs.readFileSync(pageFile, 'utf8');

const displayRegex = /\{\/\* Mock input display for numbers \*\/\}[\s\S]*?(?=\<\/div\>\n      \{feedback)/;

const displayReplacement = `{/* Mock input display for numbers */}
        {isNumericStep && (
          <div 
            className={\`absolute flex items-center justify-center \${currentStep.id === 'step-4' ? 'bg-transparent' : 'bg-[#eef6ff] border border-[#7ba7f5] rounded'} \${currentStep.id === 'step-4' && inputDigits.length === 0 ? 'hidden' : ''}\`}
            style={
              currentStep.id === 'step-4' 
              ? { left: '4%', top: '15.5%', width: '92%', height: '9%' }
              : { left: '56.9%', top: '21.05%', width: '31.9%', height: '8.3%' }
            }
          >
            {currentStep.id === 'step-4' ? (
              <span className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest text-center w-full">
                {inputDigits.length > 6 
                   ? \`\${inputDigits.slice(0, 6)} - \${inputDigits.charAt(6)}\${'*'.repeat(inputDigits.length - 7)}\` 
                   : inputDigits}
              </span>
            ) : (
              <div className="w-full h-full flex items-center relative px-2 sm:px-3">
                <span className="text-[#103aae] text-[10px] sm:text-sm md:text-base lg:text-lg font-bold tracking-tight">발급부수</span>
                <span className="absolute left-1/2 -translate-x-1/2 text-[#103aae] text-base sm:text-xl md:text-2xl lg:text-3xl font-bold">{inputDigits || '\u00A0'}</span>
                <span className="text-[#103aae] text-[10px] sm:text-sm md:text-base lg:text-lg font-bold tracking-tight ml-auto">부</span>
              </div>
            )}
          </div>
        )}
      `;

pageCode = pageCode.replace(displayRegex, displayReplacement);
fs.writeFileSync(pageFile, pageCode);

const guideFile = 'src/data/nowonFamilyCertificateGuide.ts';
let guideCode = fs.readFileSync(guideFile, 'utf8');

// Also update the keypad bounding box based on user feedback
guideCode = guideCode.replace(
  /id: 'copy-keypad',\n\s*label: '숫자 키패드',\n\s*x: 0\.553,\n\s*y: 0\.413,\n\s*width: 0\.353,\n\s*height: 0\.33,/,
  `id: 'copy-keypad',
          label: '숫자 키패드',
          x: 0.565,
          y: 0.422,
          width: 0.32,
          height: 0.32,`
);
fs.writeFileSync(guideFile, guideCode);

