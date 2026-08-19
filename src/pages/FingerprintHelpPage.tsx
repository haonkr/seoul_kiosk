import { useNavigate } from 'react-router-dom';
import { CheckCircle, ZoomIn, MessageCircle } from 'lucide-react';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { useState } from 'react';

export default function FingerprintHelpPage() {
  const navigate = useNavigate();
  const {} = useAccessibility();
  const [showMsg, setShowMsg] = useState(false);

  if (showMsg) {
    return (
      <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-6 text-center animate-in fade-in zoom-in duration-200">
        <MessageCircle className="w-20 h-20 text-orange-500 mb-8" />
        <p className="text-4xl font-bold text-gray-900 leading-normal break-keep max-w-sm mx-auto">
          "가족관계증명서를 발급하려고 하는데 지문이 인식되지 않습니다. 도와주세요."
        </p>
        <button
          onClick={() => setShowMsg(false)}
          className="mt-16 w-full max-w-xs p-6 bg-blue-600 text-white rounded-2xl text-2xl font-bold"
        >
          돌아가기
        </button>
      </div>
    );
  }

  const tips = [
    '지문 중심이 인식기 중앙에 닿게 하세요.',
    '지문이 화면의 위쪽으로 치우치면 손가락을 조금 아래로 이동하세요.',
    '지문이 화면의 아래쪽으로 치우치면 손가락을 조금 위로 이동하세요.',
    '손가락을 비스듬하게 놓지 마세요.',
    '손가락을 올린 뒤 움직이지 말고 기다리세요.',
    '손가락이나 인식기 표면이 젖어 있거나 오염된 경우 닦고 다시 시도하세요.',
    '반복해서 인식되지 않으면 주변 직원에게 도움을 요청하세요.'
  ];

  return (
    <div className="flex flex-col h-full bg-white pb-24">
      <div className="p-6 overflow-y-auto flex-1">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 break-keep leading-snug">
          지문이 인식되지 않나요?
        </h2>
        
        <p className="text-2xl text-gray-800 font-medium leading-relaxed break-keep mb-8">
          실제 발급기의 '재시도' 버튼을 누른 뒤 오른쪽 엄지손가락을 다시 올려 주세요.
        </p>

        <div className="relative w-full bg-gray-100 rounded-2xl overflow-hidden mb-8 shadow-sm border border-gray-200">
          <img src="/assets/nowon/family-certificate/014.png" alt="지문 인식 실패 안내" className="w-full h-auto" />
          <div className="absolute bottom-2 right-2 bg-gray-900/70 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 pointer-events-none">
            <ZoomIn className="w-5 h-5" />
            <span className="font-bold">안내 화면 참고</span>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {tips.map((tip, i) => (
            <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-xl text-gray-800 font-medium leading-relaxed break-keep">
                {tip}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t-2 border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 flex flex-col gap-3">
        <button
          onClick={() => setShowMsg(true)}
          className="w-full p-4 bg-orange-50 border-2 border-orange-200 text-orange-800 rounded-xl font-bold text-xl hover:bg-orange-100 flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-6 h-6" />
          직원에게 보여줄 문장
        </button>
        <div className="flex gap-3">
          
          <button
            onClick={() => navigate(-1)}
            className="flex-1 p-4 bg-blue-600 text-white rounded-xl font-bold text-xl hover:bg-blue-700"
          >
            안내 과정으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}
