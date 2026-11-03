// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// 회사 도메인(예: https://tech.dosystem.kr)을 연결하면 이 값만 바꾸고 public/CNAME 파일을 추가하세요.
	site: 'https://dosystem-labs.github.io',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			// 라이트/다크 모드에 맞춰 코드 블록 색상이 바뀝니다.
			themes: { light: 'github-light', dark: 'github-dark' },
			wrap: false,
		},
	},
});
