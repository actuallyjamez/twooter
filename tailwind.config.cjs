const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		screens: {
			xs: "500px",
			...defaultTheme.screens,
		},
		extend: {
			fontFamily: {
				"twitter-chirp": ["TwitterChirp", "sans-serif"],
				"twitter-chirp-extended": ["TwitterChirpExtendedHeavy", "sans-serif"],
			},
			colors: {
				"accent": "#1d9bf0",
				"accent-red": "#F4212E",
				"light-primary": "#0F1419",
				"light-secondary": "#536471",
				"light-border": "#EFF3F4",
				"light-line-reply": "#CFD9DE",
				"twitter-icon": "#D6D9DB",
				"image-preview-hover": "#272C30",
			},
		},
	},
	plugins: [
		({ addVariant }) => {
			addVariant("inner", "& > *");
		},
	],
};
