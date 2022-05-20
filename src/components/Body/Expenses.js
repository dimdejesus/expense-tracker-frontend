import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ExpenseCard from "./ExpenseCard";

import useModal from "../../hooks/useModal";
import ExpenseAdd from "./ExpenseAdd";

//The main page for expenses
const Expenses = ({ expenses, useForm }) => {
	//description search query
	const [query, setQuery] = useState("");

	//A hook used for controlling the modal
	const { modalOpen, handleOpen, handleClose } = useModal();

	//filter first before mapping the expenses, this is for searching purposes
	function search(items) {
		return items.filter((item) => item.description.includes(query));
	}

	return (
		<>
			<Grid container direction="column" rowSpacing={2}>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					spacing={2}
				>
					<Button variant="contained" onClick={handleOpen}>
						<Typography variant="body1">Add New</Typography>
					</Button>
					<TextField
						label="Search Description"
						variant="outlined"
						size="small"
						onChange={(e) => setQuery(e.target.value)}
					/>
				</Stack>
				<Grid item container spacing={2} justifyContent="stretch">
					{search(expenses).map(({ id, description, date, amount }) => (
						<Grid key={id} item xs={12} lg={6}>
							<ExpenseCard
								id={id}
								description={description}
								date={date}
								amount={amount}
							/>
						</Grid>
					))}
				</Grid>
			</Grid>
			<ExpenseAdd modalOpen={modalOpen} handleClose={handleClose} useForm={useForm} />
		</>
	);
};

export default Expenses;
