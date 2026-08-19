const fs = require('fs');
const pageFile = 'src/pages/PracticePage.tsx';
let pageCode = fs.readFileSync(pageFile, 'utf8');

const displayRegex = /\{\/\* Mock input display for numbers \*\/\}[\s\S]*?(?=\<\/div\>\n      \{feedback)/;

const match = pageCode.match(displayRegex);
if (match) {
  const replacement = match[0] + `
        {/* Step 13 display for inputDigits */}
        {currentStep.id === 'step-13' && inputDigits && (
          <div 
            className="absolute flex items-center justify-end bg-transparent pr-[2%]"
            style={{
              left: '50%', top: '25.6%', width: '13%', height: '6%'
            }}
          >
            <span className="text-black text-xl sm:text-2xl md:text-3xl font-bold">{inputDigits}</span>
          </div>
        )}
`;
  pageCode = pageCode.replace(displayRegex, replacement);
  fs.writeFileSync(pageFile, pageCode);
}
