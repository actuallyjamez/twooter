import { masto } from "$lib/masto";

export const fetchTrendTags = async () => {
	return masto.trends.fetchTags();
};
