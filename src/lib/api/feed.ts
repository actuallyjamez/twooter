import { masto } from "$lib/masto";
import type { Status } from "masto";

// export const fetchFeed = async () => {
// 	return await base.fetch("GET", "timelines/home").json<Status[]>();
// };

type FetchFeedOptions = {
	before?: string;
	since?: string;
};

export const fetchPublicFeed = async (ops: FetchFeedOptions) => {
	const feed = await masto.timelines.fetchPublic({ maxId: ops?.before, sinceId: ops?.since });

	const items = feed.value as Status[];

	return {
		data: items,
		last: items.at(-1)?.id,
		first: items.at(0)?.id,
	};
};
