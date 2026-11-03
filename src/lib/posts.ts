import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** 공개된 글을 최신순으로 반환합니다. 개발 서버에서는 draft 글도 보여줍니다. */
export async function getPosts(): Promise<Post[]> {
	const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** 한국어 기준 대략적인 읽기 시간(분). */
export function readingMinutes(body = ''): number {
	const text = body.replace(/```[\s\S]*?```/g, ' ').replace(/[#>*_`\-\[\]()!]/g, ' ');
	return Math.max(1, Math.round(text.replace(/\s+/g, '').length / 500));
}

/** 태그를 URL용 문자열로 바꿉니다. 예: 'GitHub Pages' → 'github-pages' */
export function tagSlug(tag: string): string {
	return tag.trim().toLowerCase().replace(/\s+/g, '-');
}
