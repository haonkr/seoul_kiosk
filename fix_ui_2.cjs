const fs = require('fs');

const guideFile = 'src/data/nowonFamilyCertificateGuide.ts';
let guideCode = fs.readFileSync(guideFile, 'utf8');

guideCode = guideCode.replace(
  /id: 'copy-keypad',\n\s*label: '숫자 키패드',\n\s*x: 0\.57,\n\s*y: 0\.4,\n\s*width: 0\.28,\n\s*height: 0\.3,/,
  `id: 'copy-keypad',
          label: '숫자 키패드',
          x: 0.553,
          y: 0.413,
          width: 0.353,
          height: 0.33,`
);

fs.writeFileSync(guideFile, guideCode);

const pageFile = 'src/pages/PracticePage.tsx';
let pageCode = fs.readFileSync(pageFile, 'utf8');

const displayRegex = /\{\/\* Mock input display for numbers \*\/\}[\s\S]*?(?=\<\/div\>\n      \{feedback)/;

// bg-[#d8ebfb] border-[2px] border-[#377df4] (let's match the original box colors)
const displayReplacement = `{/* Mock input display for numbers */}
        {isNumericStep && (
          <div 
            className={\`absolute flex items-center justify-center \${currentStep.id === 'step-4' ? 'bg-transparent' : 'bg-[#e2f1fc] border border-[#6b9cf4] rounded'} \${currentStep.id === 'step-4' && inputDigits.length === 0 ? 'hidden' : ''}\`}
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
              <span className="text-[#153eb3] text-lg sm:text-xl md:text-2xl font-extrabold tracking-tighter text-center w-full flex items-center justify-center px-4">
                <span className="mr-auto">발급부수</span> 
                <span className="min-w-[1.5rem] text-center text-3xl font-bold" style={{ transform: 'translateY(-2px)' }}>{inputDigits || '\u00A0'}</span> 
                <span className="ml-auto">부</span>
              </span>
            )}
          </div>
        )}
      `;

pageCode = pageCode.replace(displayRegex, displayReplacement);
fs.writeFileSync(pageFile, pageCode);
