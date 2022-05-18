import { Box } from "@mui/material";
import React from "react";
import FabAdd from "./FabAdd";
import FabMode from "./FabMode";

//Holds the 2 Floating action button and float them to the bottom right
//It will be used once the user is in mobile for convenience
const FabContainer = () => {
	return (
		<Box
			sx={{
				margin: 0,
				top: "auto",
				right: 20,
				bottom: 20,
				position: "fixed",
				display: "flex",
				flexDirection: "column",
				gap: 2,
			}}
		>
			<FabMode />
			<FabAdd />
		</Box>
	);
};

export default FabContainer;
