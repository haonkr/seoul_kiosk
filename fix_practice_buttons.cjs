const fs = require('fs');
const practiceFile = 'src/pages/PracticePage.tsx';
let code = fs.readFileSync(practiceFile, 'utf8');

const regex = /\s*\{\/\* Global navigation buttons \(첫화면, 전화면\) \*\/\}\s*<button[\s\S]*?aria-label="첫화면"[\s\S]*?\/>\s*<button[\s\S]*?aria-label="전화면"[\s\S]*?\/>/g;

if (regex.test(code)) {
    code = code.replace(regex, '');
    fs.writeFileSync(practiceFile, code);
    console.log("Success");
} else {
    console.log("Failed to find navigation buttons");
}
