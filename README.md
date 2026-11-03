# dosystem labs 기술 블로그

DO SYSTEM 개발자들의 멘토링과 스터디 기록을 담는 기술 블로그입니다.

- 주소: https://dosystem-labs.github.io
- 기술: [Astro](https://astro.build), GitHub Pages, GitHub Actions

## 로컬 실행

Node.js 24 이상이 필요합니다(`.nvmrc` 참고).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 에 정적 파일 생성
npm run preview  # 빌드 결과 미리보기
```

## 폴더 구조

```
src/
├── content/
│   ├── blog/        글(.md, .mdx), mentoring/·study/ 카테고리별 폴더
│   └── authors.json 작성자 프로필
├── components/      헤더, 푸터, 글 목록, 댓글 등
├── layouts/         공통 레이아웃, 글 상세 레이아웃
├── pages/           라우트(카테고리, 태그, 작성자, About)
├── styles/          전역 스타일(브랜드 컬러는 global.css의 --brand)
└── consts.ts        블로그 이름, 카테고리, 댓글 설정
docs/post-template.md  새 글 템플릿
```

글 작성 방법과 커밋 규칙은 [CONTRIBUTING.md](./CONTRIBUTING.md)를 참고하세요.

## 처음 한 번 해야 하는 설정

### 배포

저장소 Settings → Pages → Source를 **GitHub Actions**로 지정합니다. 이후 `main`에 푸시될 때마다 자동으로 배포됩니다.

### 댓글(giscus)

1. 저장소 Settings → General → Features에서 **Discussions**를 켭니다.
2. Discussions 탭에서 `Comments` 카테고리를 만듭니다(형식은 Announcement 권장).
3. https://github.com/apps/giscus 에서 giscus 앱을 이 저장소에 설치합니다.
4. https://giscus.app/ko 에 저장소 이름과 카테고리를 입력하면 `data-repo-id`, `data-category-id` 값이 나옵니다.
5. 두 값을 `src/consts.ts`의 `GISCUS.repoId`, `GISCUS.categoryId`에 넣고 푸시합니다.

값이 비어 있는 동안에는 댓글 영역이 표시되지 않습니다.

### 로고와 브랜드 컬러

- 브랜드 컬러: `src/styles/global.css`의 `--brand` 값(현재 임시값 `#e4002b`)을 CI 가이드의 정확한 값으로 바꿉니다.
- 로고: CI 로고 SVG를 `public/logo.svg`로 넣고 `src/components/Header.astro`의 안내 주석대로 교체합니다. 파비콘은 `public/favicon.svg`입니다.

### 회사 도메인 연결(선택)

`public/CNAME` 파일에 도메인(예: `tech.dosystem.kr`)을 적고, `astro.config.mjs`의 `site` 값을 같은 주소로 바꾼 뒤, DNS에 `dosystem-labs.github.io`를 가리키는 CNAME 레코드를 추가합니다.
