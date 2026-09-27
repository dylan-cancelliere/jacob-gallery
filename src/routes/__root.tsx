import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import "@mantine/core/styles.css";
import "@mantine/lightbox/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "TanStack Start Starter",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body style={{ height: "100vh", width: "100vw" }}>
				<MantineProvider>
					<ModalsProvider>{children}</ModalsProvider>
				</MantineProvider>
				<Scripts />
			</body>
		</html>
	);
}
