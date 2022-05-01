import { topRatedMovies, handleFilterMovies } from "..";
import { Data } from "../helpers/interfaces";
const axios = require("axios").default;

const urlBasic: string = "https://api.themoviedb.org/3/movie/";
const key: string = "fb1f780207fe7045344b3c6307457ba4";

// get top rated movies and much more
export const fetchTopRatedMovies = async (keyWord = "top_rated") => {
	const url: string = `${urlBasic}${keyWord}?api_key=${key}&language=en-US&page=1`;
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
			handleFilterMovies(results);
		}
	} catch (error) {
		throw new Error(" Something is gonna wrong!! check url");
	}
};
