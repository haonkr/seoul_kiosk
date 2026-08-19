const fs = require('fs');
const contextFile = 'src/contexts/AccessibilityContext.tsx';
let ctxCode = fs.readFileSync(contextFile, 'utf8');

const regex = /const vibrate = useCallback\(\(pattern: number \| number\[\] = 200\) => \{[\s\S]*?\}\]?[,;\)]*(?:\s*, \s*\[settings\.vibration\]\)\;)?/g;
// actually let's just do it directly
ctxCode = ctxCode.replace(/const vibrate = useCallback\(\(pattern: number \| number\[\] = 200\) => \{\s*if \(settings\.vibration && 'vibrate' in navigator\) \{\s*try \{\s*navigator\.vibrate\(pattern\);\s*\} catch \(e\) \{\s*\/\/ ignore\s*\}\s*\}\s*\}, \[settings\.vibration\]\);/g, '');

fs.writeFileSync(contextFile, ctxCode);
