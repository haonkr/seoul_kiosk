const fs = require('fs');

function removeButton(file) {
    let code = fs.readFileSync(file, 'utf8');
    // We can remove `<button ... > ... <Volume2 ... /> ... </button>`
    const regex = /<button[^>]*onClick=\{\(\)\s*=>\s*playVoice\([^)]*\)\}[^>]*>[\s\S]*?<Volume2[\s\S]*?<\/button>/g;
    code = code.replace(regex, '');
    fs.writeFileSync(file, code);
}

removeButton('src/pages/PreparationPage.tsx');
removeButton('src/pages/ImageZoomPage.tsx');
removeButton('src/pages/FingerprintHelpPage.tsx');
removeButton('src/components/HelpSheet.tsx');

// For GuidePage, we also missed it maybe?
removeButton('src/pages/GuidePage.tsx');

