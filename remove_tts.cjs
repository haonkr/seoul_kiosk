const fs = require('fs');

function replaceInFile(filePath, replacements) {
    let code = fs.readFileSync(filePath, 'utf8');
    for (const repl of replacements) {
        code = code.replace(repl.find, repl.replace);
    }
    fs.writeFileSync(filePath, code);
}

// 1. AccessibilityContext.tsx
let ctxCode = fs.readFileSync('src/contexts/AccessibilityContext.tsx', 'utf8');
ctxCode = ctxCode.replace(/type VoiceSpeed = 0\.8 \| 1\.0 \| 1\.2;\n/, '');
ctxCode = ctxCode.replace(/\s*voiceAutoPlay: boolean;/g, '');
ctxCode = ctxCode.replace(/\s*voiceSpeed: VoiceSpeed;/g, '');
ctxCode = ctxCode.replace(/\s*playVoice: \(text: string\) => void;/g, '');
ctxCode = ctxCode.replace(/\s*stopVoice: \(\) => void;/g, '');
ctxCode = ctxCode.replace(/\s*voiceAutoPlay: true,/g, '');
ctxCode = ctxCode.replace(/\s*voiceSpeed: 1\.0,/g, '');
ctxCode = ctxCode.replace(/\s*const playVoice = useCallback\([\s\S]*?\}, \[settings\.voiceSpeed\]\);/g, '');
ctxCode = ctxCode.replace(/\s*const stopVoice = useCallback\([\s\S]*?\}, \[\]\);/g, '');
ctxCode = ctxCode.replace(/, playVoice, stopVoice/, '');
fs.writeFileSync('src/contexts/AccessibilityContext.tsx', ctxCode);

// 2. GuidePage.tsx
let guideCode = fs.readFileSync('src/pages/GuidePage.tsx', 'utf8');
guideCode = guideCode.replace(/,\s*voiceAutoPlay,\s*playVoice,\s*stopVoice\s*/g, '');
guideCode = guideCode.replace(/const \{ updateSettings \} = useAccessibility\(\);/, 'const { updateSettings } = useAccessibility();');
guideCode = guideCode.replace(/\s*\/\/ Auto-play voice\s*if \(voiceAutoPlay\) \{\s*playVoice\(currentStep\.voiceText\);\s*\}\s*return \(\) => stopVoice\(\);/g, '');
guideCode = guideCode.replace(/, voiceAutoPlay, playVoice, stopVoice, currentStep\.voiceText/, '');
// Remove the "설명 듣기" button
guideCode = guideCode.replace(/\s*<button\s*onClick=\{\(\) => playVoice\(currentStep\.voiceText\)\}\s*className="flex-1 flex justify-center items-center gap-2 p-3 bg-blue-50 text-blue-700 rounded-xl font-bold text-lg border border-blue-200 hover:bg-blue-100"\s*>\s*<Volume2 className="w-6 h-6" \/>\s*설명 듣기\s*<\/button>/, '');
fs.writeFileSync('src/pages/GuidePage.tsx', guideCode);

// 3. PreparationPage.tsx
let prepCode = fs.readFileSync('src/pages/PreparationPage.tsx', 'utf8');
prepCode = prepCode.replace(/const \{ playVoice, stopVoice, voiceAutoPlay \} = useAccessibility\(\);/, 'const { } = useAccessibility();');
prepCode = prepCode.replace(/\s*useEffect\(\(\) => \{\s*if \(voiceAutoPlay\) \{\s*playVoice\(textToRead\);\s*\}\s*return \(\) => stopVoice\(\);\s*\}, \[voiceAutoPlay, playVoice, stopVoice, textToRead\]\);/, '');
prepCode = prepCode.replace(/\s*<button\s*onClick=\{\(\) => playVoice\(textToRead\)\}\s*className="flex-1 flex justify-center items-center gap-2 p-3 bg-blue-50 text-blue-700 rounded-xl font-bold text-lg border border-blue-200 hover:bg-blue-100"\s*>\s*<Volume2 className="w-6 h-6" \/>\s*설명 듣기\s*<\/button>/, '');
fs.writeFileSync('src/pages/PreparationPage.tsx', prepCode);

// 4. ImageZoomPage.tsx
let zoomCode = fs.readFileSync('src/pages/ImageZoomPage.tsx', 'utf8');
zoomCode = zoomCode.replace(/const \{ playVoice \} = useAccessibility\(\);/, 'const { } = useAccessibility();');
zoomCode = zoomCode.replace(/\s*<button\s*onClick=\{\(\) => playVoice\(step\.voiceText\)\}\s*className="flex-1 flex justify-center items-center gap-2 p-3 bg-gray-800 text-white rounded-xl font-bold text-lg hover:bg-gray-700"\s*>\s*<Volume2 className="w-6 h-6" \/>\s*설명 듣기\s*<\/button>/, '');
fs.writeFileSync('src/pages/ImageZoomPage.tsx', zoomCode);

// 5. CompletionPage.tsx
let compCode = fs.readFileSync('src/pages/CompletionPage.tsx', 'utf8');
compCode = compCode.replace(/const \{ playVoice, voiceAutoPlay \} = useAccessibility\(\);/, 'const { } = useAccessibility();');
compCode = compCode.replace(/\s*useEffect\(\(\) => \{\s*if \(voiceAutoPlay\) \{\s*playVoice\('.*?'\);\s*\}\s*\}, \[voiceAutoPlay, playVoice\]\);/, '');
fs.writeFileSync('src/pages/CompletionPage.tsx', compCode);

// 6. FingerprintHelpPage.tsx
let fpCode = fs.readFileSync('src/pages/FingerprintHelpPage.tsx', 'utf8');
fpCode = fpCode.replace(/const \{ playVoice \} = useAccessibility\(\);/, 'const { } = useAccessibility();');
fpCode = fpCode.replace(/\s*<button\s*onClick=\{\(\) => playVoice\('.*?'\)\}\s*className="flex-1 flex justify-center items-center gap-2 p-3 bg-blue-50 text-blue-700 rounded-xl font-bold text-lg border border-blue-200 hover:bg-blue-100"\s*>\s*<Volume2 className="w-6 h-6" \/>\s*설명 듣기\s*<\/button>/, '');
fs.writeFileSync('src/pages/FingerprintHelpPage.tsx', fpCode);

// 7. HelpSheet.tsx
let hsCode = fs.readFileSync('src/components/HelpSheet.tsx', 'utf8');
hsCode = hsCode.replace(/const \{ playVoice \} = useAccessibility\(\);/, 'const { } = useAccessibility();');
hsCode = hsCode.replace(/\s*<button\s*onClick=\{\(\) => \{ playVoice\(step\.voiceText\); onClose\(\); \}\}\s*className="w-full flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100"\s*>\s*<div className="flex items-center gap-3">\s*<Volume2 className="w-6 h-6 text-blue-600" \/>\s*<span className="text-xl font-bold text-gray-800">음성 설명 다시 듣기<\/span>\s*<\/div>\s*<\/button>/, '');
fs.writeFileSync('src/components/HelpSheet.tsx', hsCode);

// 8. SettingsPage.tsx
let setCode = fs.readFileSync('src/pages/SettingsPage.tsx', 'utf8');
setCode = setCode.replace(/\s*voiceAutoPlay,/, '');
setCode = setCode.replace(/\s*voiceSpeed,/, '');
const voiceSettingsRegex = /\s*\{\/\* Voice Settings \*\/\}\s*<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">[\s\S]*?<\/div>\s*(?=\{\/\* Contrast & Vibration \*\/\})/;
setCode = setCode.replace(voiceSettingsRegex, '\n        ');
fs.writeFileSync('src/pages/SettingsPage.tsx', setCode);

console.log("TTS removed from files.");
