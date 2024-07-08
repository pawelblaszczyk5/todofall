import core from "@todofall/eslint-config/core";
import node from "@todofall/eslint-config/node";

export default [
	{
		languageOptions: {
			parserOptions: {
				project: ["./tsconfig.json"],
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	...core,
	...node,
	{
		files: ["src/index.ts"],
		rules: {
			"canonical/filename-no-index": "off",
		},
	},
];
