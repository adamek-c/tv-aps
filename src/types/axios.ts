import { topRatedMovies } from "..";
import { Data } from "../helpers/interfaces";
const axios = require("axios").default;

const urlBasic: string = "https://api.themoviedb.org/3/tv/";
const key: string = "fb1f780207fe7045344b3c6307457ba4";
const url: string = `${urlBasic}top_rated?api_key=${key}&language=en-US&page=1`;

// get top rated movies
export const fetchTopRatedMovies = async () => {
	try {
		const {
			data: { results },
			status,
		}: Data = await axios.get(url, {
			headers: {
				Accept: "application/json",
			},
		});

		if (Number(status) === 200) {
			topRatedMovies(results);
		}
	} catch (error) {
		throw new Error(" Something is gonna wrong!! check url");
	}
};