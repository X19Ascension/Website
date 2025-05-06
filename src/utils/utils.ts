import type { CollectionEntry } from 'astro:content';

type Archive = Record<string, Record<string, CollectionEntry<'blog'>[]>>;

export function groupPostsByDate(posts: CollectionEntry<'blog'>[]): Archive {
	const archive: Archive = {};

	posts.forEach((post) => {
		const date = new Date(post.data.pubDate);
		const year = date.getFullYear().toString();
		const month = date.toLocaleString('default', { month: 'long' });

		if (!archive[year]) archive[year] = {};
		if (!archive[year][month]) archive[year][month] = [];

		archive[year][month].push(post);
	});

	return archive;
}
