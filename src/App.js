import { Box } from "@mui/material";

import Hidden from "@mui/material/Hidden";

import Header from "./components/Header";
import Body from "./components/Body";

import Space from "./components/utils/Space";
import FabContainer from "./components/fab/FabContainer";

import { useStorageContext } from "./hooks/useCustomContext";

function App() {
	const { expenses, total } = useStorageContext();

	return (
		<Box sx={{ width: "80%", margin: "auto" }}>
			<Header />
			<Space />
			<Body expenses={expenses} total={total} />
			<Hidden smUp>
				<FabContainer />
			</Hidden>
		</Box>
	);
}

export default App;
