import React, { useContext } from "react";
import { Flex, Hide, Stack, Show, Text } from "@chakra-ui/react";
import { WheelComponent } from "./WheelComponent";

export const ComingSoon = () => {
	const [wheelSize, setWheelSize] = React.useState(0);
	const wheelRef = React.useRef<HTMLDivElement | null>(null);

	React.useEffect(() => {
		const i = setInterval(() => {
			if (!wheelRef.current) return;
			const newWidth = wheelRef.current.clientWidth;
			if (newWidth === wheelSize) return;
			let newSize =
				wheelRef.current.clientWidth > wheelRef.current.clientHeight
					? wheelRef.current.clientHeight
					: wheelRef.current.clientWidth;
			if (newSize < 400) newSize = 400;
			setWheelSize(newSize * 0.9);
		}, 200);
		return () => clearInterval(i);
	}, [wheelSize]);

	return (
		<Stack
			h="100vh"
			ref={wheelRef}
			backgroundColor="gray.800"
			overflow="hidden"
			justifyContent="center"
			alignItems="center"
		>
			<WheelComponent size={wheelSize} />
		</Stack>
	);
};
