import { ChakraProvider } from "@chakra-ui/react";
import { UserContext } from "../utils/UserContext";
import React from "react";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
	const [user, setUser] = React.useState("");

	return (
		<ChakraProvider>
			<UserContext.Provider value={{ user, setUser }}>
				<Component {...pageProps} />
			</UserContext.Provider>
		</ChakraProvider>
	);
}
