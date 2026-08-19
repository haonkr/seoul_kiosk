## 프로젝트 폴더 구조

```text
/
├── public/                 # 정적 리소스 파일
│   ├── manifest.json       # PWA 매니페스트 파일
│   └── assets/
│       └── nowon/
│           └── family-certificate/  # 001.png ~ 014.png 사진 파일이 위치하는 폴더
├── src/                    # 소스 코드
│   ├── components/         # 공통 컴포넌트 (AppHeader, HelpSheet 등)
│   ├── contexts/           # 전역 상태 (접근성 설정 컨텍스트 등)
│   ├── data/               # 가이드 데이터
│   │   ├── districts.ts                  # 25개 자치구 데이터
│   │   └── nowonFamilyCertificateGuide.ts # 노원구청 가족관계증명서 안내 데이터 (좌표 포함)
│   ├── pages/              # 화면 컴포넌트 (HomePage, GuidePage, PracticePage 등)
│   ├── types/              # 타입스크립트 타입 정의 (guide.ts 등)
│   ├── App.tsx             # 앱 라우팅 및 최상위 구조
│   ├── index.css           # 글로벌 스타일 및 폰트 설정
│   └── main.tsx            # 진입점
```