import { Box } from "@mui/material";
import { useEffect } from "react";

import Hidden from "@mui/material/Hidden";

import Header from "./components/Header";
import Body from "./components/Body";

import useBackend from "./hooks/useBackend";
import Space from "./components/utils/Space";
import FabContainer from "./components/fab/FabContainer";

function App() {
	useEffect(() => {
		console.log("hello");
	}, []);

	return (
		<Box sx={{ width: "80%", margin: "auto" }}>
			<Header />
			<Space />
			<Body />
			<Hidden smUp>
				<FabContainer />
			</Hidden>
		</Box>
	);
}

export default App;
