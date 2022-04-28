import { fetchTopRatedMovies } from "./types/axios";

const box: HTMLElement = document.querySelector(".movie");

import { Movies } from "./helpers/interfaces";

// create layout
export const topRatedMovies = (results: Movies[]) => {
	const url: string = "https://image.tmdb.org/t/p/w500/";
	const movies = results
		.map((result) => {
			const {
				poster_path: img,
				first_air_date: release,
				id,
				original_name: name,
				overview,
				vote_count: count,
			} = result;

			const desc: string = overview.slice(0, 50);

			return `<div class="movie__template" id=${id}>
			<img src=${url}${img} alt=${name} />
			<p class="movie__desc">${desc}...</p>
			<h4 class="movie__title" >${name}</h4>
			<div class="movie__rating">
				<p>${release}</p>
				<p><i class="fa-solid fa-thumbs-up"></i> ${count}	</p>
			</div>
		
		</div>`;
		})
		.join("");
	box.innerHTML = movies;
};

const init = () => {
	fetchTopRatedMovies();
};

init();
