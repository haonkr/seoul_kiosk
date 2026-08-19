import { useAccessibility } from '../contexts/AccessibilityContext';

export default function SettingsPage() {
  const { 
    fontSize, 
    highContrast, 
    updateSettings 
  } = useAccessibility();

  return (
    <div className="p-6 bg-gray-50 min-h-full pb-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">환경 설정</h2>

      <div className="space-y-8">
        {/* Font Size */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">글씨 크기</h3>
          <div className="flex gap-4">
            {(['normal', 'large', 'x-large'] as const).map(size => (
              <button
                key={size}
                onClick={() => updateSettings({ fontSize: size })}
                className={`flex-1 p-4 rounded-xl font-bold border-2 transition-colors ${
                  fontSize === size 
                    ? 'bg-blue-50 border-blue-600 text-blue-700' 
                    : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {size === 'normal' && <span className="text-lg">기본</span>}
                {size === 'large' && <span className="text-xl">큰 글씨</span>}
                {size === 'x-large' && <span className="text-2xl">가장 크게</span>}
              </button>
            ))}
          </div>
        </div>
        {/* Contrast & Vibration */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">고대비 화면</h3>
              <p className="text-gray-600">색상을 더 진하게 표시합니다.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={highContrast}
                onChange={(e) => updateSettings({ highContrast: e.target.checked })}
              />
              <div className="w-16 h-8 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
          </div>
        </div>
      </div>
    </div>
  );
}
