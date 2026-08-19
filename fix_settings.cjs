const fs = require('fs');
const settingsFile = 'src/pages/SettingsPage.tsx';
let code = fs.readFileSync(settingsFile, 'utf8');

const endPart = `            </label>
          </div>
        </div>
      </div>
    </div>
  );
}`;

code = code.replace(/<\/label>\s*<\/div>\s*<\/label>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*\);\s*\}/, endPart);
fs.writeFileSync(settingsFile, code);
