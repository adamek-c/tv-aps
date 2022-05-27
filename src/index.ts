import { fetchTopRatedMovies } from "./types/axios";
import { Movies } from "./helpers/interfaces";

const box = document.querySelector<HTMLElement>(".movie");
const input = document.querySelector<HTMLInputElement>(".input");
const title = document.querySelector<Element>(".title span");

// render movies and render filtred movies
export const topRatedMovies = (results: Movies[]) => {
	const url: string = "https://image.tmdb.org/t/p/w500/";
	const movie = results
		.map((result) => {
			const {
				poster_path: img,
				release_date: release,
				id,
				original_title: name,
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
	box.innerHTML = movie;
};

// filtr movies in search input
export const handleFilterMovies = (movies: Movies[]) => {
	input.addEventListener("keyup", () => {
		const value =
			input.value.toLocaleLowerCase() || input.value.toLocaleLowerCase();
		if (input.value !== "") {
			const filterMovies = movies.filter((movie) =>
				movie.original_title.toLocaleLowerCase().startsWith(value)
			);
			return topRatedMovies(filterMovies);
		}
		return topRatedMovies(movies);
	});
};

const handlePasstKeyWord = () => {
	const keyWords = document.querySelectorAll<HTMLElement>(".box__list li");
	keyWords.forEach((key) => {
		const newKey = key.getAttribute("data-key");

		key.addEventListener("click", () => {
			fetchTopRatedMovies(newKey);
			title.innerHTML = key.innerHTML;
		});
	});
};

const init = () => {
	title.innerHTML = "Top Rated";
	fetchTopRatedMovies();
	handlePasstKeyWord();
};

init();
