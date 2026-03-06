# Next.js 15 Pages Router 마이그레이션 작업 내역

## 1. 패키지 시스템 정리 및 Next.js 이식

- 기존 프로젝트에 묶여 있던 `vite`, `@vitejs/plugin-react` 및 클라이언트 라우팅용 `react-router-dom` 패키지 일괄 삭제
- 최신 프레임워크인 `next@15` 모듈 신규 인스톨 완료

## 2. 패키지.json 구동 스크립트 전환

- 시스템 `dev`, `build`, `start` 명령 구문을 구형 Vite 모드에서 Next.js 표준 런타임(`next dev -p 3001` 등)으로 전부 교체

## 3. 코어 아키텍처 및 공통 레이아웃 개편

- 구버전 React SPA의 뼈대가 되던 `App.tsx`, `index.html`, `index.tsx`, `vite.config.ts` 등의 불필요 파일 폐기
- **`pages/_app.tsx` 생성**: 사이트 전역의 상/하단 공통 UI(`Header`, `Footer`) 및 전역 스크롤 컨트롤, `index.css`를 불러오는 엔트리 로직 구축
- **`pages/_document.tsx` 생성**: HTML 언어 속성과 `<Head>` 메타태그, 구글 폰트 적용 규칙 등을 Next.js SSR 환경 규격으로 렌더링되게끔 재설계

## 4. 페이지 기반 라우터(next/router) 치환 작업

Next.js의 Pages Router 체계가 URL 계층을 파일 시스템명으로 인식함에 따라 대대적인 문법 교체 작업 수행.

- 컴포넌트 파일 이름을 카멜케이스 기반(`CompanyIntro.tsx` 등)에서 엔드포인트 친화적인 소문자 형상(`company.tsx`, `sales.tsx`, `catering.tsx` 등)으로 변환 적용.
- 전역 검색 및 개별 파일 스캔을 통하여 기존 `react-router-dom`의 프로퍼티들(`to="..."`, `useLocation`, `useNavigate`)을 Next.js 모듈로 변경:
  - `<Link to="/...">` ➔ `<Link href="/...">` (`import Link from "next/link"`)
  - `useLocation()`, `useNavigate()` ➔ `useRouter().pathname`, `useRouter().push()` (`import { useRouter } from "next/router"`)
- **변환 및 검증이 완료된 컴포넌트 목록:**
  - `components/Header.tsx`
  - `components/Footer.tsx`
  - `pages/company.tsx`
  - `pages/guide.tsx`
  - `pages/sales.tsx`
  - `pages/sitemap.tsx`

## 5. 구조적 컴포넌트 계층 버그 패치

- 컴포넌트일 뿐이나 `pages/` 디렉토리에 위치해 있어 `/Hero`라는 라우팅 화면으로 자동 파싱 에러를 유발하던 `Hero.tsx` 모듈을 정상 경로인 `components/Hero.tsx` 디렉토리로 이동 및 Import 경로 재조정.

## 6. 프로덕션 빌드 캐시 구동 검증 (배포 테스트)

- Tailwind CSS(`tailwind.config.js`)의 Content 스캐닝 경로를 `index.html` 기반에서 Next.js 템플릿 영역(`pages/`, `components/`)으로 재조정하여 스타일링 디자인 파괴 방어.
- 로컬 상에서 직접 백그라운드 `npm run build` 정적 서버 사이드 프로덕션 컴파일을 진행하여 단 한 건의 페이지 충돌, 구문 에러, 컴파일 실패(Type Check)도 없이 성공 상태(Exit Code 0) 반환 완료.
