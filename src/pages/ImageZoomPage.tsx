import { useParams, useNavigate } from 'react-router-dom';
import { nowonFamilyCertificateGuide } from '../data/nowonFamilyCertificateGuide';
import { useState, useRef } from 'react';
import { ZoomIn, ZoomOut, Maximize, X, Eye, EyeOff } from 'lucide-react';
import { useAccessibility } from '../contexts/AccessibilityContext';

export default function ImageZoomPage() {
  const { stepId } = useParams<{ stepId: string }>();
  const navigate = useNavigate();
  const {} = useAccessibility();
  const [scale, setScale] = useState(1);
  const [showHighlights, setShowHighlights] = useState(true);
  
  const step = nowonFamilyCertificateGuide.steps.find(s => s.id === stepId);
  
  if (!step) return <div>오류: 단계를 찾을 수 없습니다.</div>;

  const handleZoomIn = () => setScale(s => Math.min(s + 0.5, 4));
  const handleZoomOut = () => setScale(s => Math.max(s - 0.5, 1));
  const handleReset = () => setScale(1);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col h-full w-full max-w-md mx-auto">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 bg-gray-900 text-white shadow-md z-10">
        <h2 className="font-bold text-lg">사진 크게 보기</h2>
        <button onClick={() => navigate(-1)} className="p-2 bg-gray-800 rounded-full active:bg-gray-700">
          <X className="w-8 h-8" />
        </button>
      </div>

      {/* Main Image Area */}
      <div className="flex-1 overflow-auto relative flex items-center justify-center">
        <div 
          className="relative origin-center transition-transform duration-200"
          style={{ transform: `scale(${scale})`, minWidth: '100%', minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <div className="relative">
            <img 
              src={step.imagePath} 
              alt="확대 사진" 
              className="max-w-none w-screen object-contain pointer-events-none"
            />
            
            {showHighlights && step.targetAreas?.map(area => (
              <div 
                key={area.id}
                className="absolute border-[6px] border-red-500 bg-red-500/20"
                style={{
                  left: `${area.x * 100}%`,
                  top: `${area.y * 100}%`,
                  width: `${area.width * 100}%`,
                  height: `${area.height * 100}%`,
                  borderRadius: area.shape === 'circle' ? '50%' : '12px'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Controls */}
      <div className="absolute right-4 top-24 flex flex-col gap-3 z-10">
        <button onClick={handleZoomIn} className="p-4 bg-white/90 text-gray-900 rounded-full shadow-lg active:bg-gray-200">
          <ZoomIn className="w-8 h-8" />
        </button>
        <button onClick={handleZoomOut} className="p-4 bg-white/90 text-gray-900 rounded-full shadow-lg active:bg-gray-200">
          <ZoomOut className="w-8 h-8" />
        </button>
        <button onClick={handleReset} className="p-4 bg-white/90 text-gray-900 rounded-full shadow-lg active:bg-gray-200">
          <Maximize className="w-8 h-8" />
        </button>
        <button onClick={() => setShowHighlights(!showHighlights)} className="p-4 bg-blue-600 text-white rounded-full shadow-lg active:bg-blue-700">
          {showHighlights ? <EyeOff className="w-8 h-8" /> : <Eye className="w-8 h-8" />}
        </button>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 p-4 pb-8 flex gap-3 z-10">
        
        <button 
          onClick={() => navigate(-1)}
          className="flex-[1.5] p-4 bg-white text-gray-900 rounded-xl font-bold text-xl active:bg-gray-200"
        >
          안내 화면으로 돌아가기
        </button>
      </div>
    </div>
  );
}
