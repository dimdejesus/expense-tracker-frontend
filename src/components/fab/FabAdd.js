import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

//Floating action button that is used for adding an expense
const FabAdd = () => {
	return (
		<Fab color="primary" aria-label="add" sx={{ right: 0, bottom: 0 }}>
			<AddIcon />
		</Fab>
	);
};

export default FabAdd;
