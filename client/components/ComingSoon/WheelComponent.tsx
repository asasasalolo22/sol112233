import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { wheelNumberToHex, wheelNumbersArray } from "../../utils/wheelNumbers";
import { Wheel, WheelContainer, WheelItem } from "./styles";

type SelectedItem = null | number;

export const WheelComponent = (props: { size: number }) => {
	const size = props.size;
	const [selectedItem, setSelectedItem] = React.useState<SelectedItem>(null);

	const [text, setText] = React.useState<string>("Coming Soon");

	React.useEffect(() => {
		setTimeout(() => setText("Coming Soon."), 1000);
		setTimeout(() => setText("Coming Soon.."), 2000);
		setTimeout(() => setText("Coming Soon..."), 3000);
		const rollResult = Math.floor(Math.random() * 40);
		setTimeout(() => setSelectedItem(rollResult), 4000);
		setTimeout(() => setSelectedItem(null), 0);
		const i = setInterval(() => {
			setText("Coming Soon");
			setTimeout(() => setText("Coming Soon."), 1000);
			setTimeout(() => setText("Coming Soon.."), 2000);
			setTimeout(() => setText("Coming Soon..."), 3000);
			const rollResult = Math.floor(Math.random() * 40);
			setTimeout(() => setSelectedItem(rollResult), 4000);
			setTimeout(() => setSelectedItem(null), 0);
		}, 12000);
		return () => clearInterval(i);
	}, []);

	const spinning = selectedItem !== null ? "spinning" : "";

	return (
		<WheelContainer size={size}>
			<Wheel
				className={spinning}
				selectedItem={selectedItem as number}
				nbItems={wheelNumbersArray.length}
				size={size}
			>
				{wheelNumbersArray.map((wheelNumber, index) => (
					<WheelItem
						size={size}
						key={index}
						itemNb={index}
						nbItems={wheelNumbersArray.length}
						bgColor={wheelNumberToHex(wheelNumber)}
					/>
				))}
			</Wheel>
			<Box
				bg={"gray.800"}
				style={{
					display: "block",
					position: "absolute",
					content: "",
					width: size - 15 * 1,
					height: size - 15 * 1,
					zIndex: "2",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					borderRadius: "50%",
				}}
			>
				<Stack
					direction="column"
					h="100%"
					w="100%"
					justifyContent="center"
					alignItems="center"
				>
					<Text
						fontSize={{ base: "3xl", sm: "5xl", md: "7xl" }}
						color={"gray.200"}
					>
						{text}
					</Text>
				</Stack>
			</Box>
		</WheelContainer>
	);
};
