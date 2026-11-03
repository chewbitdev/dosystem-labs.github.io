// 사이트 전역 설정. 블로그 이름, 소개, 카테고리, 댓글 설정을 여기서 관리합니다.

export const SITE_TITLE = 'dosystem labs 기술 블로그';
export const SITE_DESCRIPTION = 'dosystem 개발자들의 기술 이야기';
export const COMPANY_URL = 'https://renewal.dosystem.kr';
export const GITHUB_URL = 'https://github.com/dosystem-labs';

// 카테고리를 추가하려면 여기와 src/content.config.ts의 enum을 함께 수정하세요.
export const CATEGORIES = {
	mentoring: { label: 'Mentoring', description: '멘토링에서 나눈 질문과 경험을 기록합니다.' },
	study: { label: 'Study', description: '공부하고 실무에 적용해 본 기술을 정리합니다.' },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;

// 댓글(giscus) 설정. repoId와 categoryId는 https://giscus.app 에서 발급받아 입력하세요.
// 두 값이 비어 있으면 댓글 영역이 표시되지 않습니다.
export const GISCUS = {
	repo: 'dosystem-labs/dosystem-labs.github.io',
	repoId: '',
	category: 'Comments',
	categoryId: '',
};
