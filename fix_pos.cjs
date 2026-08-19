const fs = require('fs');
const file = 'src/pages/PracticePage.tsx';
let code = fs.readFileSync(file, 'utf8');

const regex = /<div \n            className="absolute flex items-center justify-center bg-transparent"\n            style=\{\{\n              left: '4%',\n              top: '15\.5%',\n              width: '92%',\n              height: '9%'\n            \}\}\n          >/;

const replacement = `<div 
            className="absolute flex items-center justify-center bg-transparent"
            style={
              currentStep.id === 'step-4' 
              ? { left: '4%', top: '15.5%', width: '92%', height: '9%' }
              : { left: '57%', top: '21%', width: '28%', height: '8%' }
            }
          >`;

code = code.replace(regex, replacement);
fs.writeFileSync(file, code);
