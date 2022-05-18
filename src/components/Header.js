import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import Hidden from "@mui/material/Hidden";

import MUISwitch from "./utils/MUISwitch";
import { useThemeContext } from "../hooks/useCustomContext";

const Header = () => {
	return (
		<Grid container justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
			{" "}
			<Grid item>
				<Typography variant="h3">Expense Tracker</Typography>
			</Grid>
			<Hidden smDown>
				<Grid item>
					<MUISwitch
						checked={useThemeContext().mode === "dark" ? true : false}
						onChange={useThemeContext().themeMode.toggleThemeMode}
					/>
				</Grid>
			</Hidden>
		</Grid>
	);
};

export default Header;
