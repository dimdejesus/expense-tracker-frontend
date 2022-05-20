import { createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

//The purpose of this is to globalize the expenses variable or its localstorage access
export const StorageContext = createContext();

export const StorageProvider = ({ children }) => {
	//a local storage where it initialize a result if it does not exist otherwise it gets the value
	const [expenses, setExpenses] = useLocalStorage("expenses", []);
	const [total, setTotal] = useLocalStorage("total_expenses", 0);

	useEffect(() => {
		setTotal(expenses.reduce((total, expense) => (total += expense.amount), 0));
	}, [total, expenses, setTotal]);

	return (
		<StorageContext.Provider value={{ expenses, setExpenses, total, setTotal }}>
			{children}
		</StorageContext.Provider>
	);
};
