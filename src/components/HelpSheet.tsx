import { useNavigate } from 'react-router-dom';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { GuideStep } from '../types/guide';
import { ZoomIn, MapPin, RotateCcw, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function HelpSheet({ onClose, step }: { onClose: () => void, step: GuideStep }) {
  const navigate = useNavigate();
  const {} = useAccessibility();
  const [showMsg, setShowMsg] = useState(false);

  if (showMsg) {
    return (
      <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-6 text-center animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-4 bg-gray-100 rounded-full text-gray-800"
        >
          <X className="w-10 h-10" />
        </button>
        <MessageCircle className="w-20 h-20 text-orange-500 mb-8" />
        <p className="text-4xl font-bold text-gray-900 leading-normal break-keep max-w-sm mx-auto">
          "가족관계증명서를 발급하려고 합니다. 현재 이 단계에서 어려움을 겪고 있습니다. 어떤 버튼을 눌러야 하는지 알려 주세요."
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

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-end animate-in fade-in">
      <div className="bg-white w-full max-w-md mx-auto rounded-t-3xl pb-8 shadow-2xl animate-in slide-in-from-bottom">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-900 ml-2">도움 메뉴</h3>
          <button onClick={onClose} className="p-3 bg-gray-100 rounded-full">
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <div className="p-4 space-y-3">
          
          
          <button 
            onClick={() => { navigate(`/district/nowon/family-certificate/zoom/${step.id}`); onClose(); }}
            className="w-full flex items-center gap-4 p-5 bg-gray-50 rounded-2xl active:bg-gray-100"
          >
            <ZoomIn className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">사진 크게 보기</span>
          </button>
          
          <button 
            onClick={() => { setShowMsg(true); }}
            className="w-full flex items-center gap-4 p-5 bg-orange-50 rounded-2xl active:bg-orange-100"
          >
            <MessageCircle className="w-8 h-8 text-orange-600" />
            <span className="text-xl font-bold text-orange-800">직원에게 보여줄 문장</span>
          </button>
          
          <button 
            onClick={() => { if(step.previousStepId) navigate(`/district/nowon/family-certificate/guide/${step.previousStepId}`); onClose(); }}
            disabled={!step.previousStepId}
            className={`w-full flex items-center gap-4 p-5 rounded-2xl ${step.previousStepId ? 'bg-gray-50 active:bg-gray-100' : 'opacity-50'}`}
          >
            <RotateCcw className="w-8 h-8 text-gray-600" />
            <span className="text-xl font-bold text-gray-800">이전 단계로 돌아가기</span>
          </button>

          <button 
            onClick={() => { navigate(`/district/nowon/family-certificate/guide/step-1`); onClose(); }}
            className="w-full flex items-center gap-4 p-5 bg-gray-50 rounded-2xl active:bg-gray-100"
          >
            <MapPin className="w-8 h-8 text-gray-600" />
            <span className="text-xl font-bold text-gray-800">처음부터 다시 보기</span>
          </button>
        </div>
      </div>
    </div>
  );
}
