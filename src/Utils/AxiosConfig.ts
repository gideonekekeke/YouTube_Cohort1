import axios from "axios";

const Instance = axios.create({
	baseURL: "https://youtube-search-and-download.p.rapidapi.com",
	headers: {
		"X-RapidAPI-Key": "262cf58710mshc375870cb9ea1f3p1d34d9jsnb2243f9c22d9",
		"X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
	},
});

export default Instance;
