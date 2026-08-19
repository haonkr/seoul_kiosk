const fs = require('fs');

function removeImport(file) {
    let code = fs.readFileSync(file, 'utf8');
    code = code.replace(/Volume2\s*,?\s*/g, '');
    code = code.replace(/,\s*\}/g, ' }'); // clean up trailing commas
    code = code.replace(/{\s*}/g, '{}');
    fs.writeFileSync(file, code);
}

removeImport('src/pages/GuidePage.tsx');
removeImport('src/pages/PreparationPage.tsx');
removeImport('src/pages/ImageZoomPage.tsx');
removeImport('src/pages/FingerprintHelpPage.tsx');
removeImport('src/components/HelpSheet.tsx');

