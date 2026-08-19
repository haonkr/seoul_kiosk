import { useNavigate } from 'react-router-dom';
import { MonitorPlay, Smartphone } from 'lucide-react';

export default function ModeSelectionPage() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 break-keep">
        어떻게 이용하시겠어요?
      </h2>

      <div className="space-y-6">
        <button
          onClick={() => navigate('/district/nowon/family-certificate/preparation')}
          className="w-full text-left p-6 bg-blue-50 border-2 border-blue-500 rounded-2xl flex flex-col gap-4 shadow-sm hover:bg-blue-100 active:bg-blue-200"
        >
          <div className="flex items-center gap-4">
            <MonitorPlay className="w-10 h-10 text-blue-600" />
            <span className="text-2xl font-bold text-blue-900">발급기에서 따라하기</span>
          </div>
          <p className="text-lg text-blue-800 font-medium">
            실제 발급기 앞에서 사진과 설명을 한 단계씩 확인합니다.
          </p>
        </button>

        <button
          onClick={() => navigate('/district/nowon/family-certificate/practice/step-1')}
          className="w-full text-left p-6 bg-green-50 border-2 border-green-500 rounded-2xl flex flex-col gap-4 shadow-sm hover:bg-green-100 active:bg-green-200"
        >
          <div className="flex items-center gap-4">
            <Smartphone className="w-10 h-10 text-green-600" />
            <span className="text-2xl font-bold text-green-900">집에서 미리 연습하기</span>
          </div>
          <p className="text-lg text-green-800 font-medium">
            실제 화면과 비슷한 연습 화면에서 버튼을 눌러 봅니다.
          </p>
        </button>
      </div>

      <div className="mt-12 space-y-4">
        <button
          onClick={() => navigate('/district/nowon/family-certificate/guide/step-1')}
          className="w-full p-5 text-xl font-bold text-gray-700 bg-gray-200 rounded-2xl hover:bg-gray-300 active:bg-gray-400"
        >
          전체 과정 먼저 보기
        </button>
        
        <button
          onClick={() => navigate('/district/nowon/family-certificate/preparation')}
          className="w-full p-5 text-xl font-bold text-gray-700 bg-gray-200 rounded-2xl hover:bg-gray-300 active:bg-gray-400"
        >
          준비사항 확인하기
        </button>
      </div>
    </div>
  );
}
