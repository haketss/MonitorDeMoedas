import axios from "axios";

export const apiMoedas = axios.create({
	baseURL: "https://economia.awesomeapi.com.br/json/last", // URL da API
	headers: {
		"Content-Type": "application/json",
	},
});
