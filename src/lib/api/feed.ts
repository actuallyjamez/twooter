import { masto } from "$lib/masto";
import type { Status } from "masto";

// export const fetchFeed = async () => {
// 	return await base.fetch("GET", "timelines/home").json<Status[]>();
// };

export const fetchPublicFeed = async (after?: string) => {
	const feed = await masto.timelines.fetchPublic({ maxId: after });

	const items = feed.value as Status[];

	return {
		data: items,
		last: items.at(-1)?.id,
		first: items.at(0)?.id,
	};
};
