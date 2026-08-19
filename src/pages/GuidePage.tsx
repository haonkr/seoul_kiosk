import { useParams, useNavigate } from 'react-router-dom';
import { nowonFamilyCertificateGuide } from '../data/nowonFamilyCertificateGuide';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { useEffect, useState } from 'react';
import { HelpCircle, ArrowLeft, ArrowRight, ZoomIn } from 'lucide-react';
import HelpSheet from '../components/HelpSheet';

export default function GuidePage() {
  const { stepId } = useParams<{ stepId: string }>();
  const navigate = useNavigate();
  const { updateSettings} = useAccessibility();
  const [showHelp, setShowHelp] = useState(false);

  const steps = nowonFamilyCertificateGuide.steps;
  const currentStep = steps.find(s => s.id === stepId) || steps[0];
  const stepIndex = steps.indexOf(currentStep);
  const isCompletion = currentStep.type === 'completion';

  useEffect(() => {
    // Save progress
    updateSettings({ lastGuideId: 'nowon-family-certificate', lastStepId: currentStep.id });
  }, [currentStep.id, updateSettings, currentStep.voiceText]);

  useEffect(() => {
    if (isCompletion) {
      navigate('/district/nowon/family-certificate/completion', { replace: true });
    }
  }, [isCompletion, navigate]);

  // If completion step, redirect to completion page for better specialized UI
  if (isCompletion) {
    return null;
  }

  const handleNext = () => {
    if (currentStep.nextStepId) {
      navigate(`/district/nowon/family-certificate/guide/${currentStep.nextStepId}`);
    }
  };

  const handlePrev = () => {
    if (currentStep.previousStepId) {
      navigate(`/district/nowon/family-certificate/guide/${currentStep.previousStepId}`);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white relative pb-32">
      {/* Header Info */}
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <div className="flex justify-between items-center text-sm font-bold text-gray-500 mb-2">
          <span>노원구청 / 가족관계증명서</span>
          <span>{stepIndex + 1} / {steps.length - 1} 단계</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-blue-600 h-3 rounded-full transition-all duration-300" 
            style={{ width: `${((stepIndex + 1) / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </div>

      <div className="p-6 flex-1 overflow-y-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 break-keep leading-snug">
          {currentStep.title}
        </h2>

        {/* Image Container with Overlay */}
        <div 
          className="relative w-full aspect-4/3 bg-gray-100 rounded-2xl overflow-hidden mb-6 shadow-sm border border-gray-200 cursor-pointer"
          onClick={() => navigate(`/district/nowon/family-certificate/zoom/${currentStep.id}`)}
        >
          <img 
            src={currentStep.imagePath} 
            alt="안내 사진" 
            className="w-full h-full object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect fill="%23f3f4f6" width="100" height="100"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="10" x="50" y="50" text-anchor="middle"%3E사진을 불러올 수 없습니다%3C/text%3E%3C/svg%3E';
            }}
          />
          
          {/* Highlights */}
          {currentStep.targetAreas?.map(area => (
            <div 
              key={area.id}
              className="absolute border-4 border-red-500 bg-red-500/20 shadow-[0_0_0_9999px_rgba(0,0,0,0.5)] pointer-events-none transition-all duration-300"
              style={{
                left: `${area.x * 100}%`,
                top: `${area.y * 100}%`,
                width: `${area.width * 100}%`,
                height: `${area.height * 100}%`,
                borderRadius: area.shape === 'circle' ? '50%' : '8px'
              }}
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-red-600 font-bold px-3 py-1 rounded-full text-lg shadow-md whitespace-nowrap border-2 border-red-500 flex items-center gap-1">
                여기를 눌러 주세요
              </div>
            </div>
          ))}

          <div className="absolute bottom-2 right-2 bg-gray-900/70 text-white px-3 py-1.5 rounded-lg flex items-center gap-2">
            <ZoomIn className="w-5 h-5" />
            <span className="font-bold">사진 크게 보기</span>
          </div>
        </div>

        {/* Text Description */}
        <div className="space-y-4 mb-8">
          {currentStep.description.split('\n\n').map((para, i) => (
            <p key={i} className="text-2xl text-gray-800 font-medium leading-relaxed break-keep">
              {para}
            </p>
          ))}
        </div>

        {/* Caution */}
        {currentStep.cautionText && (
          <div className="p-4 bg-orange-50 border-2 border-orange-200 rounded-xl mb-4">
            <p className="text-xl font-bold text-orange-800 leading-relaxed break-keep">
              주의: {currentStep.cautionText}
            </p>
          </div>
        )}

        {/* Help Action Buttons (e.g. fingerprint fail) */}
        {currentStep.helpActions?.includes('지문이 인식되지 않아요') && (
          <button
            onClick={() => navigate('/district/nowon/family-certificate/fingerprint-help')}
            className="w-full p-4 mt-4 bg-red-50 border-2 border-red-200 text-red-700 rounded-xl font-bold text-xl hover:bg-red-100"
          >
            지문이 인식되지 않아요
          </button>
        )}
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t-2 border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4">
        <div className="flex gap-2 mb-3">
          <button
            onClick={() => setShowHelp(true)}
            className="flex-1 flex justify-center items-center gap-2 p-3 bg-orange-50 text-orange-700 rounded-xl font-bold text-lg border border-orange-200 hover:bg-orange-100"
          >
            <HelpCircle className="w-6 h-6" />
            도움이 필요해요
          </button>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={!currentStep.previousStepId}
            className={`flex-1 flex justify-center items-center gap-2 p-4 rounded-xl font-bold text-xl ${
              currentStep.previousStepId 
                ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' 
                : 'bg-gray-100 text-gray-400 opacity-50 cursor-not-allowed'
            }`}
          >
            <ArrowLeft className="w-6 h-6" />
            이전 단계
          </button>
          <button
            onClick={handleNext}
            disabled={!currentStep.nextStepId}
            className={`flex-[1.5] flex justify-center items-center gap-2 p-4 rounded-xl font-bold text-xl ${
              currentStep.nextStepId 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {currentStep.type === 'status' ? '다음 화면이 나왔어요' : '다음 단계'}
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {showHelp && (
        <HelpSheet 
          onClose={() => setShowHelp(false)} 
          step={currentStep} 
        />
      )}
    </div>
  );
}
