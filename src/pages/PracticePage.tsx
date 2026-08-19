import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { nowonFamilyCertificateGuide } from '../data/nowonFamilyCertificateGuide';

export default function PracticePage() {
  const { stepId } = useParams<{ stepId: string }>();
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState<string | null>(null);
  const [inputDigits, setInputDigits] = useState<string>('');

  const steps = nowonFamilyCertificateGuide.steps.filter(s => s.type !== 'status' && s.type !== 'completion');
  const currentStep = steps.find(s => s.id === stepId) || steps[0];
  const stepIndex = steps.indexOf(currentStep);

  const isNumericStep = currentStep.id === 'step-4' || currentStep.id === 'step-11';

  const handleCorrectClick = () => {
    setFeedback('잘하셨습니다. 다음 단계로 이동합니다.');
    setTimeout(() => {
      setFeedback(null);
      if (currentStep.id === 'step-4') {
        setInputDigits('');
      }
      const nextIdx = stepIndex + 1;
      if (nextIdx < steps.length) {
        navigate(`/district/nowon/family-certificate/practice/${steps[nextIdx].id}`);
      } else {
        navigate('/district/nowon/family-certificate/completion');
      }
    }, 1500);
  };

  const handleIncorrectClick = () => {
    setFeedback('괜찮습니다. 강조된 부분을 다시 확인해 보세요.');
    setTimeout(() => setFeedback(null), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-white relative">
      <div className="p-4 bg-green-50 border-b-2 border-green-200">
        <h2 className="text-2xl font-bold text-green-900 mb-2">미리 연습하기 ({stepIndex + 1}/{steps.length})</h2>
        <p className="text-lg text-green-800 font-medium">안내에 따라 맞는 위치를 눌러 보세요.</p>
        <p className="text-xl font-bold text-gray-900 mt-4 leading-snug">{currentStep.title}</p>
      </div>

      <div className="flex-1 relative flex items-center justify-center bg-gray-100 overflow-hidden" onClick={handleIncorrectClick}>
        <img 
          src={currentStep.imagePath} 
          alt="연습 화면" 
          className="w-full h-full object-contain pointer-events-none" 
        />
        
        {/* Clickable areas */}
        {currentStep.targetAreas?.map(area => {
          if (area.id === 'copy-input') return null;
          if (isNumericStep && area.id.includes('keypad')) {
            return (
              <div
                key={area.id}
                className="absolute flex flex-col"
                style={{
                  left: `${area.x * 100}%`,
                  top: `${area.y * 100}%`,
                  width: `${area.width * 100}%`,
                  height: `${area.height * 100}%`,
                }}
              >
                 {Array.from({ length: currentStep.id === 'step-11' ? 3 : 4 }).map((_, rowIndex) => (
                    <div key={rowIndex} className="flex-1 flex">
                      {Array.from({ length: 3 }).map((_, colIndex) => {
                         const btnValue = rowIndex === 3 ? (colIndex === 0 ? 'del' : colIndex === 1 ? '0' : 'clear') : (rowIndex * 3 + colIndex + 1).toString();
                         return (
                           <button
                             key={colIndex}
                             className="flex-1 active:bg-blue-500/40 rounded-xl mx-[1.5%] my-[1.5%]"
                             onClick={(e) => {
                               e.stopPropagation();
                               if (btnValue === 'del') {
                                 setInputDigits('');
                               } else if (btnValue === 'clear') {
                                 setInputDigits(prev => prev.slice(0, -1));
                               } else {
                                 if (currentStep.id === 'step-11') {
                                   setInputDigits(btnValue);
                                 } else {
                                   const maxLen = 13;
                                   setInputDigits(prev => prev.length < maxLen ? prev + btnValue : prev);
                                 }
                               }
                             }}
                             aria-label={`키패드 ${btnValue}`}
                           />
                         );
                      })}
                    </div>
                 ))}
              </div>
            );
          }

          return (
            <button
              key={area.id}
              onClick={(e) => {
                e.stopPropagation();
                if (isNumericStep && area.id.includes('confirm')) {
                  if (currentStep.id === 'step-4' && inputDigits.length < 13) {
                    setFeedback('주민등록번호 13자리를 모두 입력해 주세요.');
                    setTimeout(() => setFeedback(null), 2000);
                    return;
                  }
                  if (currentStep.id === 'step-11' && inputDigits.length === 0) {
                    setFeedback('먼저 숫자를 입력해 주세요.');
                    setTimeout(() => setFeedback(null), 2000);
                    return;
                  }
                }
                handleCorrectClick();
              }}
              className="absolute bg-blue-500/30 border-4 border-blue-500 animate-pulse"
              style={{
                left: `${area.x * 100}%`,
                top: `${area.y * 100}%`,
                width: `${area.width * 100}%`,
                height: `${area.height * 100}%`,
                borderRadius: area.shape === 'circle' ? '50%' : '8px'
              }}
              aria-label={area.label}
            />
          );
        })}
        {/* Mock input display for numbers */}
        {isNumericStep && (
          <div 
            className={`absolute flex items-center justify-center ${currentStep.id === 'step-4' ? 'bg-transparent' : 'bg-[#e2f1fc] border border-[#6b9cf4] rounded'} ${currentStep.id === 'step-4' && inputDigits.length === 0 ? 'hidden' : ''}`}
            style={
              currentStep.id === 'step-4' 
              ? { left: '4%', top: '15.5%', width: '92%', height: '9%' }
              : { left: '55.8%', top: '21.1%', width: '33%', height: '9%' }
            }
          >
            {currentStep.id === 'step-4' ? (
              <span className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest text-center w-full">
                {inputDigits.length > 6 
                   ? `${inputDigits.slice(0, 6)} - ${inputDigits.charAt(6)}${'*'.repeat(inputDigits.length - 7)}` 
                   : inputDigits}
              </span>
            ) : (
              <div className="w-full h-full flex items-center px-3 sm:px-4 md:px-5">
                <span className="text-[#103aae] text-[12px] sm:text-sm md:text-base lg:text-lg font-bold tracking-tight">발급부수</span>
                <div className="flex-1 flex justify-center items-center">
                  <span className="text-[#103aae] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-none">{inputDigits || ' '}</span>
                </div>
                <span className="text-[#103aae] text-[12px] sm:text-sm md:text-base lg:text-lg font-bold tracking-tight">부</span>
              </div>
            )}
          </div>
        )}
      
        {/* Step 13 display for inputDigits */}
        {currentStep.id === 'step-13' && inputDigits && (
          <div 
            className="absolute flex items-center justify-end bg-transparent pr-[2%]"
            style={{
              left: '48%', top: '25.6%', width: '15%', height: '7%'
            }}
          >
            <span className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">{inputDigits}</span>
          </div>
        )}
</div>
      {feedback && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 bg-white p-6 rounded-2xl shadow-2xl border-4 border-green-500 text-center z-50">
          <p className="text-3xl font-bold text-gray-900 break-keep">{feedback}</p>
        </div>
      )}

      <div className="p-4 bg-white border-t-2 border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <button
          onClick={() => navigate('/district/nowon/family-certificate/mode')}
          className="w-full p-4 bg-gray-200 text-gray-800 rounded-xl font-bold text-xl hover:bg-gray-300"
        >
          연습 그만하기
        </button>
      </div>
    </div>
  );
}
