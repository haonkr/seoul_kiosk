const fs = require('fs');
const pageFile = 'src/pages/PracticePage.tsx';
let pageCode = fs.readFileSync(pageFile, 'utf8');
const displayRegex = /\{\/\* Mock input display for numbers \*\/\}[\s\S]*?(?=\<\/div\>\n      \{feedback)/;

const displayReplacement = `{/* Mock input display for numbers */}
        {isNumericStep && (
          <div 
            className={\`absolute flex items-center justify-center \${currentStep.id === 'step-4' ? 'bg-transparent' : 'bg-[#e2f1fc] border border-[#6b9cf4] rounded'} \${currentStep.id === 'step-4' && inputDigits.length === 0 ? 'hidden' : ''}\`}
            style={
              currentStep.id === 'step-4' 
              ? { left: '4%', top: '15.5%', width: '92%', height: '9%' }
              : { left: '56.5%', top: '21%', width: '32%', height: '9%' }
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
                <span className="text-[#103aae] text-[11px] sm:text-sm md:text-base lg:text-lg font-bold tracking-tight">발급부수</span>
                <span className="absolute left-1/2 -translate-x-1/2 text-[#103aae] text-base sm:text-xl md:text-2xl lg:text-3xl font-bold">{inputDigits || '\u00A0'}</span>
                <span className="text-[#103aae] text-[11px] sm:text-sm md:text-base lg:text-lg font-bold tracking-tight ml-auto">부</span>
              </div>
            )}
          </div>
        )}
      `;

pageCode = pageCode.replace(displayRegex, displayReplacement);
fs.writeFileSync(pageFile, pageCode);
