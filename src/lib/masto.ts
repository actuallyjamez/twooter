import { login } from "masto";

export const masto = await login({
	url: "https://home.social",
	// accessToken: 'TOKEN',
});
