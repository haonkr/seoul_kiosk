# 서울특별시 무인발급기 가이드

고령자와 정보 소외계층을 위해 노원구청 무인민원발급기의 가족관계증명서 발급 과정을 단계별로 안내하고 연습할 수 있는 모바일 웹앱입니다.

## 📂 프로젝트 폴더 구조

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

## 🚀 실행 방법

1. Node.js가 설치되어 있어야 합니다.
2. 터미널에서 다음 명령어를 실행하여 의존성을 설치합니다:
   ```bash
   npm install
   ```
3. 다음 명령어를 실행하여 개발 서버를 시작합니다:
   ```bash
   npm run dev
   ```
4. 브라우저에서 표시된 로컬 주소(예: `http://localhost:3000`)로 접속하여 앱을 확인합니다.

## 🖼 이미지를 교체하는 방법

1. 새로운 사진 파일들을 `public/assets/nowon/family-certificate/` 폴더에 넣습니다.
2. 파일 이름이 `001.png`, `002.png` 등과 동일하다면 덮어쓰기만 하면 변경 사항이 즉시 적용됩니다.
3. 파일 이름이 다를 경우, `src/data/nowonFamilyCertificateGuide.ts` 파일에서 해당 단계의 `imagePath` 속성 값을 새로운 파일명으로 수정해 줍니다.

## ✍️ 강조 좌표를 수정하는 방법

사진 위의 빨간색 강조 테두리 위치가 맞지 않는 경우, 데이터를 수정하여 조정할 수 있습니다.
1. `src/data/nowonFamilyCertificateGuide.ts` 파일을 엽니다.
2. 각 `steps` 항목 안의 `targetAreas` 배열을 찾습니다.
3. `x`, `y`는 화면 왼쪽 위를 기준으로 한 비율(0~1)이며, `width`, `height`는 너비와 높이의 비율입니다.
4. 값을 0.01 단위로 조금씩 수정하여 실제 이미지의 버튼 위치에 맞게 조정합니다.
   - 예: `x: 0.5`는 이미지 가로의 딱 절반(50%) 위치에서 강조 표시가 시작됨을 의미합니다.

## 🏢 새로운 구청을 추가하는 방법

1. `src/data/districts.ts` 파일에서 추가할 구청의 `enabled` 값을 `true`로 변경합니다.
2. 해당 구청의 상태 라벨(`statusLabel`)을 `'이용 가능'`으로 변경하고, 지원할 서류의 아이디를 `supportedDocuments` 배열에 추가합니다 (예: `['family-certificate']`).
3. 새로운 구청 전용 안내 데이터를 담은 파일을 `src/data` 폴더에 생성합니다 (예: `gangnamFamilyCertificateGuide.ts`).
4. 라우터 설정(`src/App.tsx`) 또는 선택 화면(`src/pages/DistrictSelectionPage.tsx`)에서 새로 활성화된 구청 아이디(`gangnam`)로 넘어갈 때 사용할 페이지(예: `GangnamPage.tsx`)를 만들어 연결해 줍니다.
