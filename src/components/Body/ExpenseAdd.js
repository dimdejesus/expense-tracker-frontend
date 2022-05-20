import React, { useState } from "react";
import { Box, Modal, Stack, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@mui/material";

import { useAlertContext } from "../../hooks/useCustomContext";
import { useStorageContext } from "../../hooks/useCustomContext";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const ExpenseAdd = ({ modalOpen, handleClose }) => {
	const { triggerSuccess, triggerError } = useAlertContext(); //get the triggers for user visualization of happenings

	const { setExpenses } = useStorageContext();

	const [description, setDescription] = useState(""); //description textfield
	const [date, setDate] = useState(null); //date textfield
	const [amount, setAmount] = useState(0); //amount textfield

	const [errors, setErrors] = useState({});

	React.useEffect(() => {
		if (!description) setErrors((prevError) => ({ ...prevError, description: "Required" }));
		else setErrors((prevError) => ({ ...prevError, description: "" }));

		if (new Date(date) > new Date())
			setErrors((prevError) => ({ ...prevError, date: "Must be on or before" }));
		else setErrors((prevError) => ({ ...prevError, date: "" }));

		if (amount < 1)
			setErrors((prevError) => ({ ...prevError, amount: "Must not be 0 or below" }));
		else setErrors((prevError) => ({ ...prevError, amount: "" }));
	}, [description, date, amount]);

	//this is where it will go once the user clicks the Submit button.
	const submitForm = (e) => {
		e.preventDefault();

		try {
			setExpenses((oldExpenses) => [
				...oldExpenses,
				{ id: oldExpenses.length + 1, description, date, amount },
			]);
			triggerSuccess(`${description} has been added to expenses`);
		} catch (error) {
			triggerError(error.message);
		}

		//set the values to default values
		setDescription("");
		setDate(null);
		setAmount(0);
		handleClose();
	};

	return (
		<Modal
			open={modalOpen}
			onClose={handleClose}
			aria-labelledby=""
			aria-describedby=""
			sx={{}}
		>
			<Box sx={style}>
				<form onSubmit={submitForm}>
					<Stack spacing={2}>
						<Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold" }}>
							Add New Expense
						</Typography>
						<TextField
							variant="outlined"
							label="Description"
							name="description"
							onChange={(e) => setDescription(e.target.value)}
							error={errors.description ? true : false}
							helperText={errors.description ? errors.description : null}
							value={description}
						/>

						<DatePicker
							label="Start Date"
							name="date"
							onChange={(newValue) => setDate(newValue)}
							value={date}
							renderInput={(params) => (
								<TextField
									{...params}
									error={errors.date ? true : false}
									helperText={errors.date ? errors.date : null}
								/>
							)}
						/>

						<TextField
							variant="outlined"
							label="Amount"
							name="amount"
							onChange={(e) => setAmount(+e.target.value)}
							value={amount}
							error={errors.amount ? true : false}
							helperText={errors.amount ? errors.amount : null}
						/>
						<Button variant="contained" type="submit">
							Submit
						</Button>
					</Stack>
				</form>
			</Box>
		</Modal>
	);
};

export default ExpenseAdd;
