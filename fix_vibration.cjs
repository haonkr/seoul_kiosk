const fs = require('fs');
const settingsFile = 'src/pages/SettingsPage.tsx';
let code = fs.readFileSync(settingsFile, 'utf8');

const regex = /<div className="flex items-center justify-between border-t pt-8">[\s\S]*?<\/div>/;

if (regex.test(code)) {
    code = code.replace(regex, '');
    
    // Also remove the vibration destructuring
    code = code.replace(/\s*vibration,\n/, '\n');
    
    fs.writeFileSync(settingsFile, code);
    console.log("SettingsPage updated");
} else {
    console.log("SettingsPage regex failed");
}

const contextFile = 'src/contexts/AccessibilityContext.tsx';
let ctxCode = fs.readFileSync(contextFile, 'utf8');

ctxCode = ctxCode.replace(/\s*vibration: boolean;/g, '');
ctxCode = ctxCode.replace(/\s*vibration: true,/g, '');
ctxCode = ctxCode.replace(/\s*vibrate: \(pattern\?: number \| number\[\]\) => void;/g, '');

const vibrateRegex = /const vibrate = useCallback\(\(pattern: number \| number\[\] = 200\) => \{[\s\S]*?\}\}, \[settings\.vibration\]\);/;
ctxCode = ctxCode.replace(vibrateRegex, '');
ctxCode = ctxCode.replace(/, vibrate/g, '');

fs.writeFileSync(contextFile, ctxCode);
console.log("AccessibilityContext updated");
