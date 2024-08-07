import tseslint from "typescript-eslint";
import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules } from "@eslint/compat";
import reactRefresh from "eslint-plugin-react-refresh";
import reactCompiler from "eslint-plugin-react-compiler";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

export default tseslint.config(
	react.configs.flat.recommended,
	{
		name: "react overrides",
		rules: {
			"react/button-has-type": "error",
			"react/self-closing-comp": "error",
			"react/hook-use-state": ["error", { allowDestructuredState: true }],
			"react/destructuring-assignment": "error",
			"react/prefer-read-only-props": "error",
			"react/react-in-jsx-scope": "off",
			"react/jsx-uses-react": "off",
			"react/jsx-curly-brace-presence": ["error", { propElementValues: "always", children: "never", props: "never" }],
			"react/jsx-boolean-value": ["error", "always"],
		},
		settings: {
			react: {
				version: "detect",
			},
		},
	},
	...fixupConfigRules(compat.extends("plugin:react-hooks/recommended")),
	{
		name: "react-hooks overrides",
		rules: {
			"react-hooks/exhaustive-deps": "error",
		},
	},
	{
		name: "react-refresh",
		plugins: {
			"react-refresh": reactRefresh,
		},
		rules: {
			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
		},
	},
	jsxA11y.flatConfigs.strict,
	{
		name: "react-compiler",
		plugins: {
			"react-compiler": reactCompiler,
		},
		rules: {
			"react-compiler/react-compiler": "error",
		},
	},
);
