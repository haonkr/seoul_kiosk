import { useNavigate } from 'react-router-dom';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { CheckSquare, Home, RotateCcw, AlertCircle } from 'lucide-react';
import { useEffect } from 'react';

export default function CompletionPage() {
  const navigate = useNavigate();
  const { } = useAccessibility();

  const checks = [
    '가족관계증명서를 꺼냈나요?',
    '필요한 발급 부수가 맞나요?',
    '일반, 상세, 특정 중 필요한 종류가 맞나요?',
    '주민등록번호 표시 여부가 맞나요?',
    '카드나 현금을 사용했다면 모두 챙겼나요?',
    '휴대전화와 개인 소지품을 챙겼나요?',
    '발급기 화면에 개인정보가 남아 있지 않은지 확인했나요?'
  ];

  return (
    <div className="flex flex-col min-h-full bg-blue-50 p-6 pb-32">
      <div className="text-center mb-8 pt-8">
        <div className="inline-flex justify-center items-center w-24 h-24 bg-blue-600 text-white rounded-full mb-6">
          <CheckSquare className="w-12 h-12" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 break-keep">
          가족관계증명서 발급 과정을 모두 확인했습니다.
        </h2>
        <p className="text-xl text-gray-700 font-medium break-keep">
          서류가 나올 때까지 기다려 주시고, 아래 항목을 확인해 주세요.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-8 space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <AlertCircle className="w-7 h-7 text-orange-500" />
          마지막 확인 목록
        </h3>
        {checks.map((check, idx) => (
          <label key={idx} className="flex items-start gap-4 p-3 active:bg-gray-50 rounded-xl">
            <input type="checkbox" className="w-8 h-8 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1" />
            <span className="text-xl font-medium text-gray-800 break-keep pt-1 leading-relaxed">{check}</span>
          </label>
        ))}
      </div>

      <div className="space-y-4 mt-auto">
        <button
          onClick={() => navigate('/')}
          className="w-full flex justify-center items-center gap-3 p-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 active:bg-blue-800 shadow-md"
        >
          <Home className="w-7 h-7" />
          처음 화면으로
        </button>
        <button
          onClick={() => navigate('/district/nowon/family-certificate/guide/step-1')}
          className="w-full flex justify-center items-center gap-3 p-5 bg-white border-2 border-gray-300 text-gray-800 rounded-2xl font-bold text-xl hover:bg-gray-50 active:bg-gray-100"
        >
          <RotateCcw className="w-7 h-7" />
          발급 과정 다시 보기
        </button>
      </div>
    </div>
  );
}
