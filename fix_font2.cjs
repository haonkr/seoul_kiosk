const fs = require('fs');
const file = 'src/pages/PracticePage.tsx';
let code = fs.readFileSync(file, 'utf8');

code = code.replace(
  /className="absolute flex items-center justify-center bg-white"/g,
  'className="absolute flex items-center justify-center bg-transparent"'
);

fs.writeFileSync(file, code);
