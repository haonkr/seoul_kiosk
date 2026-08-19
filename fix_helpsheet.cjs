const fs = require('fs');
let code = fs.readFileSync('src/components/HelpSheet.tsx', 'utf8');

code = code.replace(/<button[^>]*onClick=\{\(\) => \{ playVoice\(step\.voiceText\); onClose\(\); \}\}[^>]*>[\s\S]*?<\/button>/, '');
fs.writeFileSync('src/components/HelpSheet.tsx', code);
