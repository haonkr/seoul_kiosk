import { useNavigate } from 'react-router-dom';
import { FileText, AlertTriangle } from 'lucide-react';

export default function NowonPage() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">노원구청 무인민원발급기</h2>
        <p className="text-xl text-gray-700 font-medium leading-relaxed bg-gray-100 p-4 rounded-xl border border-gray-200">
          촬영 당시 노원구청에 설치된 무인민원발급기를 기준으로 안내합니다.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-800">지원 중인 증명서</h3>
        
        <button
          onClick={() => navigate('/district/nowon/family-certificate/mode')}
          className="w-full text-left p-6 bg-blue-50 border-2 border-blue-500 rounded-2xl flex items-center justify-between shadow-sm hover:bg-blue-100 active:bg-blue-200"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-600 text-white rounded-full">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <span className="block text-2xl font-bold text-blue-900 mb-1">가족관계증명서</span>
              <span className="inline-block px-2 py-1 bg-blue-600 text-white text-sm font-bold rounded-lg">이용 가능</span>
            </div>
          </div>
        </button>

        {['주민등록등본', '주민등록초본', '기본증명서', '혼인관계증명서'].map(doc => (
          <div key={doc} className="w-full text-left p-6 bg-gray-50 border-2 border-gray-200 rounded-2xl flex items-center justify-between opacity-80">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-300 text-gray-600 rounded-full">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <span className="block text-2xl font-bold text-gray-600 mb-1">{doc}</span>
                <span className="inline-block px-2 py-1 bg-gray-300 text-gray-700 text-sm font-bold rounded-lg">준비 중</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 space-y-4">
        <button
          onClick={() => navigate('/districts')}
          className="w-full p-5 text-xl font-bold text-gray-700 bg-gray-200 rounded-2xl hover:bg-gray-300 active:bg-gray-400"
        >
          서울 구청 선택으로 돌아가기
        </button>
        
        <button
          onClick={() => navigate('/about')}
          className="w-full p-5 text-xl font-bold text-orange-800 bg-orange-100 border-2 border-orange-200 rounded-2xl hover:bg-orange-200 active:bg-orange-300 flex justify-center items-center gap-2"
        >
          <AlertTriangle className="w-6 h-6" />
          이 기기 안내의 주의사항
        </button>
      </div>
    </div>
  );
}
