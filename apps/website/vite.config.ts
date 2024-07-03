import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";

export default defineConfig({
	plugins: [
		remix({
			buildDirectory: "dist",
			future: {
				unstable_fogOfWar: true,
				unstable_singleFetch: true,
				v3_fetcherPersist: true,
				v3_relativeSplatPath: true,
				v3_throwAbortReason: true,
			},
		}),
		babel({
			babelConfig: {
				plugins: [["babel-plugin-react-compiler", {}]],
				presets: ["@babel/preset-typescript"],
			},
			filter: /\.[jt]sx?$/u,
		}),
	],
});
