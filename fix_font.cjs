const fs = require('fs');
const file = 'src/pages/PracticePage.tsx';
let code = fs.readFileSync(file, 'utf8');

code = code.replace(
  /<span className="text-gray-900 text-5xl font-bold tracking-\[0\.2em\]">/g,
  '<span className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest text-center w-full">'
);

fs.writeFileSync(file, code);
