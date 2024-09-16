import { Vue } from 'svelte';

type ComicDefinition = {
	name: string;
	description?: string;
	key: string;
	tags: string[];
	type: 'comic' | 'markdown';
};