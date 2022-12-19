import { base } from "./base";
import type { Status } from "./entities/status";

export const fetchFeed = async () => {
	return await base.fetch("GET", "timelines/home").json<Status[]>();
};

export const fetchPublicFeed = async () => {
	return await base.fetch("GET", "timelines/public").json<Status[]>();
};
