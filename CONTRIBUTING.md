# 기여 가이드

dosystem labs 기술 블로그에 글을 쓰고 코드를 수정하는 방법을 정리한 문서입니다.

## 1. 처음 글을 쓴다면: 작성자 등록

`src/content/authors.json` 파일에 본인 항목을 추가합니다. 키가 작성자 아이디가 됩니다.

```json
{
	"기존 작성자": { "name": "..." },
	"hong-gildong": {
		"name": "홍길동",
		"role": "DT Team",
		"bio": "결제 시스템을 만드는 백엔드 개발자입니다.",
		"github": "hong-gildong"
	}
}
```

`role`, `bio`, `github`은 생략할 수 있습니다. 실명이 부담스럽다면 닉네임을 써도 됩니다.

## 2. 글 작성

1. `main`에서 새 브랜치를 만듭니다. 예: `post/spring-batch-tuning`
2. `docs/post-template.md`를 복사해 `src/content/blog/<카테고리>/<영문-슬러그>.md`로 저장합니다. 폴더는 글의 `category` 값과 같게 `mentoring` 또는 `study`를 씁니다. 폴더와 파일 이름이 글 주소가 됩니다(`/blog/<카테고리>/<영문-슬러그>/`).
3. 이미지는 `src/content/blog/images/` 같은 폴더(카테고리 폴더 밖)에 두고 상대 경로로 넣습니다.
4. `npm run dev`로 http://localhost:4321 에서 미리 보며 작성합니다. `draft: true`인 글은 개발 서버에서만 보입니다.
5. 완성되면 `draft`를 지우고 Pull Request를 올립니다. 리뷰어 1명 이상의 승인 후 `main`에 머지하면 자동으로 배포됩니다.

카테고리는 `mentoring`, `study` 두 가지입니다. 새 카테고리가 필요하면 `src/consts.ts`와 `src/content.config.ts`를 함께 수정합니다.

## 3. 커밋 규칙

[Conventional Commits](https://www.conventionalcommits.org/ko/v1.0.0/)를 따릅니다.

```
타입: 제목

본문(선택)
```

| 타입 | 용도 |
|---|---|
| post | 새 글 추가 |
| edit | 기존 글 내용 수정, 오탈자 수정 |
| feat | 블로그 기능 추가 (예: 검색, 목차) |
| fix | 블로그 기능 버그 수정 |
| style | 디자인, CSS 변경 |
| docs | README, CONTRIBUTING 등 문서 수정 |
| chore | 패키지 업데이트, 설정 변경 등 기타 작업 |

작성 규칙은 다음과 같습니다.

- 타입은 영어 소문자, 제목은 한국어로 씁니다.
- 제목은 50자 이내로, 마침표 없이 명사형으로 끝냅니다. 예: `post: Spring Batch 청크 크기 튜닝 경험 공유`
- 하나의 커밋에는 하나의 변경만 담습니다.

## 4. 브랜치 이름

| 접두어 | 용도 |
|---|---|
| `post/` | 새 글 작성 |
| `edit/` | 기존 글 수정 |
| `feat/`, `fix/` | 블로그 기능 개발과 수정 |
