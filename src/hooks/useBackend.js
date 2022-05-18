import React from "react";
import api from "../utils/api";

//To isolate my communication with api. It can be reusable

const useBackend = () => {
	const getAllExpenses = async () => {
		try {
			const posts = await api.get("/expenses");

			return posts.data;
		} catch (err) {
			console.log(err);
		}
	};

	return { getAllExpenses };
};

export default useBackend;
