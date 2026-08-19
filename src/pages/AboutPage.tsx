import { Info, AlertTriangle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="p-6 bg-white min-h-full">
      <div className="flex items-center justify-center mb-8 pt-8">
        <Info className="w-16 h-16 text-blue-600" />
      </div>
      
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8 break-keep">
        앱 안내 및 주의사항
      </h2>

      <div className="space-y-6">
        <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
          <h3 className="text-xl font-bold text-blue-900 mb-4">제작 목적</h3>
          <p className="text-lg text-blue-800 leading-relaxed break-keep">
            이 앱은 서울특별시 노원구청에 설치된 특정 무인민원발급기의 촬영 화면을 기준으로 제작한 교육용 안내 서비스입니다. 무인발급기 사용이 낯선 분들이 순서대로 연습하고 따라 하실 수 있도록 돕기 위해 만들어졌습니다.
          </p>
        </div>

        <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-orange-600" />
            <h3 className="text-xl font-bold text-orange-900">주의사항</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex gap-3 text-lg text-orange-900 leading-relaxed break-keep">
              <span className="font-bold">•</span>
              기기의 제조사, 설치 장소, 소프트웨어 버전 및 운영 설정에 따라 실제 화면과 발급 순서가 달라질 수 있습니다.
            </li>
            <li className="flex gap-3 text-lg text-orange-900 leading-relaxed break-keep">
              <span className="font-bold">•</span>
              이 앱은 정부 또는 지방자치단체의 공식 앱이 아니며, 실제 증명서를 발급하지 않습니다.
            </li>
            <li className="flex gap-3 text-lg text-orange-900 leading-relaxed break-keep">
              <span className="font-bold">•</span>
              사진과 실제 발급기의 화면이 다르면 실제 기기의 안내와 담당 직원의 설명을 우선해 주세요.
            </li>
            <li className="flex gap-3 text-lg text-orange-900 leading-relaxed break-keep">
              <span className="font-bold">•</span>
              주민등록번호 등 개인정보는 이 앱에 절대 입력하지 마시고, 실제 발급기 화면에만 입력해 주세요.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
