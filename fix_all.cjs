const fs = require('fs');
const file = 'src/pages/PracticePage.tsx';
let code = fs.readFileSync(file, 'utf8');

// 1. Skip copy-input rendering in targetAreas
code = code.replace(
  /\{currentStep\.targetAreas\?\.map\(area => \{/,
  `{currentStep.targetAreas?.map(area => {
          if (area.id === 'copy-input') return null;`
);

// 2. Fix keypad row count and click logic
code = code.replace(
  /\{Array\.from\(\{ length: 4 \}\)\.map\(\(_, rowIndex\) => \(/,
  `{Array.from({ length: currentStep.id === 'step-11' ? 3 : 4 }).map((_, rowIndex) => (`
);

code = code.replace(
  /if \(btnValue === 'del'\) \{[\s\S]*?\} else if \(btnValue === 'clear'\) \{[\s\S]*?\} else \{[\s\S]*?const maxLen = currentStep\.id === 'step-4' \? 13 : 1;\s*setInputDigits\(prev => prev\.length < maxLen \? prev \+ btnValue : prev\);\s*\}/,
  `if (btnValue === 'del') {
                                 setInputDigits('');
                               } else if (btnValue === 'clear') {
                                 setInputDigits(prev => prev.slice(0, -1));
                               } else {
                                 if (currentStep.id === 'step-11') {
                                   setInputDigits(btnValue);
                                 } else {
                                   const maxLen = 13;
                                   setInputDigits(prev => prev.length < maxLen ? prev + btnValue : prev);
                                 }
                               }`
);

// 3. Fix mock input display
const displayRegex = /\{\/\* Mock input display for numbers \*\/\}[\s\S]*?(?=\<\/div\>\n      \{feedback)/;

const displayReplacement = `{/* Mock input display for numbers */}
        {isNumericStep && (
          <div 
            className={\`absolute flex items-center justify-center \${currentStep.id === 'step-4' ? 'bg-transparent' : 'bg-[#a3c9fe] border-2 border-[#1e58d6] rounded-md shadow-inner'} \${currentStep.id === 'step-4' && inputDigits.length === 0 ? 'hidden' : ''}\`}
            style={
              currentStep.id === 'step-4' 
              ? { left: '4%', top: '15.5%', width: '92%', height: '9%' }
              : { left: '56.5%', top: '27.4%', width: '27%', height: '8.5%' }
            }
          >
            {currentStep.id === 'step-4' ? (
              <span className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest text-center w-full">
                {inputDigits.length > 6 
                   ? \`\${inputDigits.slice(0, 6)} - \${inputDigits.charAt(6)}\${'*'.repeat(inputDigits.length - 7)}\` 
                   : inputDigits}
              </span>
            ) : (
              <span className="text-[#1034a6] text-lg sm:text-xl md:text-2xl font-bold tracking-tighter text-center w-full flex items-center justify-center">
                발급부수 <span className="mx-1 inline-block min-w-[1.5rem] text-center">{inputDigits || '\u00A0'}</span> 부
              </span>
            )}
          </div>
        )}
      `;

code = code.replace(displayRegex, displayReplacement);
fs.writeFileSync(file, code);
