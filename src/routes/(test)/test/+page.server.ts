import { fetchPublicFeed } from "$lib/api/feed";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	const feed = fetchPublicFeed();
	return {
		feed,
	};
};
