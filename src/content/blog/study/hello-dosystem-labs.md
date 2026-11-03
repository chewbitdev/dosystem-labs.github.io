---
title: 'dosystem labs 기술 블로그를 시작합니다'
description: 'Astro와 GitHub Pages로 기술 블로그를 만든 과정과 앞으로의 운영 방식을 정리했습니다.'
pubDate: '2026-11-03'
category: 'study'
tags: ['Astro', 'GitHub Pages', '블로그']
author: 'dosystem-labs'
---

DO SYSTEM 개발자들이 함께 쓰는 기술 블로그를 열었습니다. 이 글은 블로그를 어떻게 만들었는지, 그리고 앞으로 어떻게 글을 쓰고 올릴지 정리한 첫 기록입니다.

## 왜 Astro를 골랐나

기존에는 Jekyll을 쓰던 경험이 있었지만, 이번에는 [Astro](https://astro.build)를 선택했습니다. 팀원 모두 JavaScript에 익숙하고, 글 위주의 정적 사이트라 페이지가 가볍게 유지된다는 점이 컸습니다. 필요하면 React 컴포넌트로 인터랙티브한 예제도 넣을 수 있습니다.

배포는 GitHub Actions가 맡습니다. `main` 브랜치에 글이 머지되면 자동으로 빌드되어 GitHub Pages에 올라갑니다.

## 글은 이렇게 씁니다

글은 `src/content/blog/` 아래 카테고리 폴더(`mentoring` 또는 `study`)에 마크다운 파일로 추가합니다. 파일 맨 위에 제목, 요약, 카테고리, 작성자 같은 정보를 적어 주면 목록과 카테고리 페이지에 자동으로 반영됩니다.

```yaml
---
title: '글 제목'
description: '목록에 보일 한두 문장 요약'
pubDate: '2026-11-03'
category: 'study' # mentoring 또는 study
tags: ['Spring', 'JPA']
author: 'hong-gildong'
---
```

## 코드 블록 예시

Java와 JavaScript 코드는 라이트 모드와 다크 모드에 맞춰 색상이 자동으로 바뀝니다.

```java
@RestController
@RequestMapping("/api/posts")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/{id}")
    public PostResponse find(@PathVariable Long id) {
        return postService.find(id);
    }
}
```

```js
const posts = await fetch('/api/posts').then((res) => res.json());
console.log(`${posts.length}개의 글을 불러왔습니다.`);
```

## 앞으로

멘토링에서 나온 질문과 답, 스터디에서 정리한 내용을 꾸준히 올릴 예정입니다. 글 작성 방법과 커밋 규칙은 저장소의 `CONTRIBUTING.md`에 정리해 두었습니다.
