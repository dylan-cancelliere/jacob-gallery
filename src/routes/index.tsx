import { Group, Image, SimpleGrid, Stack } from "@mantine/core";
import { Lightbox, type LightboxSlideData } from "@mantine/lightbox";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import img1 from "../../public/Technosapiens_2026Scan_001.webp";
import img2 from "../../public/Technosapiens_2026Scan_002.webp";

export const Route = createFileRoute("/")({ component: Home });

const images = [
	img1,
	img2,
	"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
	"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
	"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
	"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png",
	"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png",
];
const slides: LightboxSlideData[] = images.map((src) => ({ src }));

function Home() {
	const [opened, setOpened] = useState(false);
	const [index, setIndex] = useState(0);

	return (
		<Group h="100%" w="100%" style={{ overflow: "auto" }} m="lg">
			<Lightbox
				opened={opened}
				onClose={() => setOpened(false)}
				slides={slides}
				currentIndex={index}
				onIndexChange={setIndex}
			/>

			{images.map((src, i) => (
				<Image
					maw="30%"
					key={src}
					src={src}
					radius="md"
					style={{ cursor: "pointer" }}
					onClick={() => {
						setIndex(i);
						setOpened(true);
					}}
				/>
			))}
		</Group>
	);
}
