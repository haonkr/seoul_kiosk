import { useNavigate } from 'react-router-dom';
import { nowonFamilyCertificateGuide } from '../data/nowonFamilyCertificateGuide';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import { useEffect } from 'react';

export default function PreparationPage() {
  const navigate = useNavigate();
  const {} = useAccessibility();
  
  const textToRead = "시작하기 전에 확인해 주세요. " + nowonFamilyCertificateGuide.preparationItems.join(". ");

  return (
    <div className="p-6 pb-24">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 break-keep">
        시작하기 전에 확인해 주세요
      </h2>

      <div className="space-y-4 mb-8">
        {nowonFamilyCertificateGuide.preparationItems.map((item, idx) => (
          <div key={idx} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <p className="text-xl text-gray-800 font-medium leading-relaxed break-keep">
              {item}
            </p>
          </div>
        ))}
      </div>

      <div className="flex gap-4 p-5 bg-orange-50 border-2 border-orange-200 rounded-xl mb-8">
        <AlertTriangle className="w-10 h-10 text-orange-600 flex-shrink-0" />
        <p className="text-xl font-bold text-orange-800 leading-relaxed break-keep">
          어떤 증명서가 필요한지 모르겠다면 임의로 선택하지 말고 서류를 요구한 기관에 먼저 확인하세요.
        </p>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t-2 border-gray-200 p-4 flex flex-col gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        
        <div className="flex gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 p-4 bg-gray-200 text-gray-800 rounded-xl font-bold text-xl hover:bg-gray-300"
          >
            이전으로
          </button>
          <button
            onClick={() => navigate('/district/nowon/family-certificate/guide/step-1')}
            className="flex-1 p-4 bg-blue-600 text-white rounded-xl font-bold text-xl hover:bg-blue-700"
          >
            발급 안내 시작
          </button>
        </div>
      </div>
    </div>
  );
}
