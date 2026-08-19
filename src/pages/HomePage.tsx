import { useNavigate } from 'react-router-dom';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { FileText, MapPin, Play, Settings } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();
  const { lastStepId } = useAccessibility();

  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-full space-y-8 bg-blue-50/50">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-100 text-blue-600 mb-2 shadow-sm">
          <FileText className="w-12 h-12" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight leading-snug">
          서울특별시<br/>무인발급기 가이드
        </h1>
        <p className="text-xl text-gray-600 font-medium">
          무인민원발급기 사용을 차근차근 도와드립니다.
        </p>
      </div>

      <div className="w-full space-y-4">
        <button
          onClick={() => navigate('/districts')}
          className="w-full flex items-center justify-between p-6 bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-700 active:bg-blue-800 transition-colors"
          aria-label="구청 선택하기"
        >
          <div className="flex items-center gap-4">
            <MapPin className="w-8 h-8" />
            <span className="text-2xl font-bold">구청 선택하기</span>
          </div>
        </button>

        <button
          onClick={() => navigate(`/district/nowon/family-certificate/guide/${lastStepId}`)}
          disabled={!lastStepId}
          className={`w-full flex items-center justify-between p-6 rounded-2xl shadow-md transition-colors ${
            lastStepId 
              ? 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 active:bg-blue-100' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
          aria-label="마지막 단계에서 이어보기"
        >
          <div className="flex items-center gap-4">
            <Play className="w-8 h-8" />
            <span className="text-2xl font-bold">마지막 단계 이어보기</span>
          </div>
        </button>
        
        <button
          onClick={() => navigate('/about')}
          className="w-full flex items-center p-6 bg-white border-2 border-gray-200 text-gray-800 rounded-2xl shadow-sm hover:bg-gray-50 active:bg-gray-100"
        >
          <span className="text-xl font-bold">사용 방법 알아보기</span>
        </button>

        <button
          onClick={() => navigate('/settings')}
          className="w-full flex items-center p-6 bg-white border-2 border-gray-200 text-gray-800 rounded-2xl shadow-sm hover:bg-gray-50 active:bg-gray-100"
        >
          <div className="flex items-center gap-4">
            <Settings className="w-7 h-7" />
            <span className="text-xl font-bold">환경 설정</span>
          </div>
        </button>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-xl w-full border border-gray-200 text-center">
        <p className="text-lg text-gray-600 font-medium break-keep">
          이 앱은 교육용 안내 서비스이며<br />실제 증명서를 발급하지 않습니다.
        </p>
      </div>
    </div>
  );
}
