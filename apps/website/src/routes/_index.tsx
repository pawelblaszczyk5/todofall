import { useLoaderData } from "@remix-run/react";
import { Suspense, use } from "react";

import { css } from "@todofall/css";

import { defineLoader } from "#src/lib/remix.js";

export const loader = defineLoader(async () => {
	const date = new Promise<Date>(resolve => {
		setTimeout(() => {
			resolve(new Date());
		}, 3_000);
	});

	return { date };
});

const Test = ({ datePromise }: Readonly<{ datePromise: Promise<Date> }>) => {
	const date = use(datePromise);

	return <p>{date.toISOString()}</p>;
};

const IndexAppRoute = () => {
	const { date } = useLoaderData<typeof loader>();

	return (
		<div>
			<h1 style={css({ color: "blue", on: $ => [$("hover", { color: "red" })] })}>Hello world</h1>
			<title>bla bla</title>
			<meta content="Welcome to Remix!" name="description" />
			<Suspense fallback={<p>Loading...</p>}>
				<Test datePromise={date} />
			</Suspense>
		</div>
	);
};

export default IndexAppRoute;
