const fs = require('fs');
const pageFile = 'src/pages/PracticePage.tsx';
let pageCode = fs.readFileSync(pageFile, 'utf8');

pageCode = pageCode.replace(
  /<div className="w-full h-full flex items-center px-2 sm:px-3 md:px-4">[\s\S]*?\)\}\n          <\/div>/,
  `<div className="w-full h-full flex items-center px-3 sm:px-4 md:px-5">
                <span className="text-[#103aae] text-[12px] sm:text-sm md:text-base lg:text-lg font-bold tracking-tight">발급부수</span>
                <div className="flex-1 flex justify-center items-center">
                  <span className="text-[#103aae] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-none">{inputDigits || '\u00A0'}</span>
                </div>
                <span className="text-[#103aae] text-[12px] sm:text-sm md:text-base lg:text-lg font-bold tracking-tight">부</span>
              </div>
            )}
          </div>`
);
fs.writeFileSync(pageFile, pageCode);
