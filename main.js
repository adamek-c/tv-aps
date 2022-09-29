const urlBasic = "https://api.themoviedb.org/3/movie/";
const key = "fb1f780207fe7045344b3c6307457ba4";

// get top rated movies and much more
const fetchTopRatedMovies = async (keyWord = "top_rated") => {
	const url = `${urlBasic}${keyWord}?api_key=${key}&language=en-US&page=1`;

	try {
		let response = await fetch(url);
		let { results } = await response.json();
		topRatedMovies(results);
	} catch (error) {
		console.log(error);
	}
};

const grid = document.querySelector(".grid");
const input = document.querySelector("input[type = 'search']");

// render movies and render filtred movies
const topRatedMovies = (results) => {
	const url = "https://image.tmdb.org/t/p/w500/";
	const movie = results
		.map((result) => {
			const {
				poster_path: img,
				release_date: release,
				id,
				original_title: name,
				vote_count: count,
			} = result;

			return `<div class="card" id=${id}>
			<img src=${url}${img} alt=${name}  id="img"/>
			<div class="card__info">
						<h4 class="card__info__title">${name}</h4>
						<div class="card__info__list">
							<h5 class="card__info__list__item">
								<span>
									<svg
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1.80408 5.48577H12.2014"
											stroke="#232C34"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M3.65894 7.76404C3.65894 7.34982 3.99472 7.01404 4.40894 7.01404H4.41434C4.82855 7.01404 5.16434 7.34982 5.16434 7.76404C5.16434 8.17825 4.82855 8.51404 4.41434 8.51404H4.40894C3.99472 8.51404 3.65894 8.17825 3.65894 7.76404ZM7.00293 7.01406C6.58872 7.01406 6.25293 7.34984 6.25293 7.76406C6.25293 8.17827 6.58872 8.51406 7.00293 8.51406H7.00834C7.42255 8.51406 7.75834 8.17827 7.75834 7.76406C7.75834 7.34984 7.42255 7.01406 7.00834 7.01406H7.00293ZM9.59147 7.01406C9.17726 7.01406 8.84147 7.34984 8.84147 7.76406C8.84147 8.17827 9.17726 8.51406 9.59147 8.51406H9.59688C10.0111 8.51406 10.3469 8.17827 10.3469 7.76406C10.3469 7.34984 10.0111 7.01406 9.59688 7.01406H9.59147ZM9.59147 9.28117C9.17726 9.28117 8.84147 9.61696 8.84147 10.0312C8.84147 10.4454 9.17726 10.7812 9.59147 10.7812H9.59688C10.0111 10.7812 10.3469 10.4454 10.3469 10.0312C10.3469 9.61696 10.0111 9.28117 9.59688 9.28117H9.59147ZM6.25293 10.0312C6.25293 9.61696 6.58872 9.28117 7.00293 9.28117H7.00834C7.42255 9.28117 7.75834 9.61696 7.75834 10.0312C7.75834 10.4454 7.42255 10.7812 7.00834 10.7812H7.00293C6.58872 10.7812 6.25293 10.4454 6.25293 10.0312ZM4.40894 9.28115C3.99472 9.28115 3.65894 9.61693 3.65894 10.0311C3.65894 10.4454 3.99472 10.7811 4.40894 10.7811H4.41434C4.82855 10.7811 5.16434 10.4454 5.16434 10.0311C5.16434 9.61693 4.82855 9.28115 4.41434 9.28115H4.40894Z"
											fill="#232C34"
										/>
										<path
											d="M9.35882 1.16663V3.08625"
											stroke="#232C34"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M4.64667 1.16663V3.08625"
											stroke="#232C34"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M9.47232 2.08789H4.53306C2.81999 2.08789 1.75 3.04219 1.75 4.79632V10.0753C1.75 11.857 2.81999 12.8334 4.53306 12.8334H9.46692C11.1854 12.8334 12.25 11.8735 12.25 10.1194V4.79632C12.2554 3.04219 11.1908 2.08789 9.47232 2.08789Z"
											stroke="#232C34"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</span>
								${release}
							</h5>
							<h5 class="card__info__list__item">
								<span
									><svg
										width="16"
										height="15"
										viewBox="0 0 16 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M13.7887 11.8118L14.5164 11.9932L14.5164 11.9932L13.7887 11.8118ZM14.9563 7.12811L14.2286 6.94669L14.2286 6.94669L14.9563 7.12811ZM9.64223 5.33333L9.01765 4.91812C8.86462 5.14832 8.85061 5.44403 8.9812 5.68766C9.11179 5.93129 9.36581 6.08333 9.64223 6.08333V5.33333ZM10.6568 3.8071L11.2814 4.22231L11.2814 4.22231L10.6568 3.8071ZM8.20186 1V0.25C7.93239 0.25 7.68363 0.394561 7.55022 0.628688L8.20186 1ZM5.416 5.88903L6.06764 6.26034L6.06764 6.26034L5.416 5.88903ZM5.64181 12.77L5.22497 13.3935L5.22497 13.3935L5.64181 12.77ZM6.75594 13.5148L7.17278 12.8913L7.17278 12.8913L6.75594 13.5148ZM2.44037 5.36111H3.88074V3.86111H2.44037V5.36111ZM4.57111 6.05556V12.5556H6.07111V6.05556H4.57111ZM3.88074 13.25H2.44037V14.75H3.88074V13.25ZM1.75 12.5556V6.05556H0.25V12.5556H1.75ZM2.44037 13.25C2.06109 13.25 1.75 12.9411 1.75 12.5556H0.25C0.25 13.7655 1.22867 14.75 2.44037 14.75V13.25ZM4.57111 12.5556C4.57111 12.9411 4.26003 13.25 3.88074 13.25V14.75C5.09245 14.75 6.07111 13.7655 6.07111 12.5556H4.57111ZM3.88074 5.36111C4.26003 5.36111 4.57111 5.67003 4.57111 6.05556H6.07111C6.07111 4.8456 5.09245 3.86111 3.88074 3.86111V5.36111ZM2.44037 3.86111C1.22867 3.86111 0.25 4.8456 0.25 6.05556H1.75C1.75 5.67003 2.06109 5.36111 2.44037 5.36111V3.86111ZM8.35389 14.75H10.9939V13.25H8.35389V14.75ZM14.5164 11.9932L15.684 7.30952L14.2286 6.94669L13.0609 11.6304L14.5164 11.9932ZM13.5589 4.58333H9.64223V6.08333H13.5589V4.58333ZM10.2668 5.74855L11.2814 4.22231L10.0323 3.39188L9.01765 4.91812L10.2668 5.74855ZM9.15877 0.25H8.20186V1.75H9.15877V0.25ZM7.55022 0.628688L4.76437 5.51772L6.06764 6.26034L8.85349 1.37131L7.55022 0.628688ZM4.57111 6.24735V12.169H6.07111V6.24735H4.57111ZM5.22497 13.3935L6.3391 14.1383L7.17278 12.8913L6.05865 12.1465L5.22497 13.3935ZM4.57111 12.169C4.57111 12.6603 4.81595 13.12 5.22497 13.3935L6.05865 12.1465C6.06697 12.152 6.07111 12.1607 6.07111 12.169H4.57111ZM15.684 7.30953C16.0286 5.92731 14.9865 4.58333 13.5589 4.58333V6.08333C14.0055 6.08333 14.3385 6.50559 14.2286 6.94669L15.684 7.30953ZM10.9939 14.75C12.6615 14.75 14.1128 13.6121 14.5164 11.9932L13.0609 11.6304C12.8233 12.5836 11.9702 13.25 10.9939 13.25V14.75ZM8.35389 13.25C7.9337 13.25 7.52274 13.1253 7.17278 12.8913L6.3391 14.1383C6.93557 14.5371 7.63662 14.75 8.35389 14.75V13.25ZM11.2814 4.22231C12.4083 2.52716 11.1992 0.25 9.15877 0.25V1.75C9.99435 1.75 10.5007 2.68726 10.0323 3.39188L11.2814 4.22231ZM4.76437 5.51772C4.63767 5.74006 4.57111 5.99155 4.57111 6.24735H6.07111C6.07111 6.25178 6.06997 6.25625 6.06764 6.26034L4.76437 5.51772Z"
											fill='#232C34'
										/></svg
								></span>
								Like ${count}
							</h5>
						</div>
			</div>
		
		</div>`;
		})
		.join("");
	grid.innerHTML = movie;
};

// // filtr movies in search input
// const handleFilterMovies = (movies) => {
// 	input.addEventListener("keyup", () => {
// 		const value =
// 			input.value.toLocaleLowerCase() || input.value.toLocaleLowerCase();
// 		if (input.value !== "") {
// 			const filterMovies = movies.filter((movie) =>
// 				movie.original_title.toLocaleLowerCase().startsWith(value)
// 			);
// 			return topRatedMovies(filterMovies);
// 		}
// 		return topRatedMovies(movies);
// 	});
// };

// const handlePasstKeyWord = () => {
// 	const keyWords = document.querySelectorAll(".box__list li");
// 	keyWords.forEach((key) => {
// 		const newKey = key.getAttribute("data-key");

// 		key.addEventListener("click", () => {
// 			fetchTopRatedMovies(newKey);
// 		});
// 	});
// };

const init = () => {
	fetchTopRatedMovies();
	// handlePasstKeyWord();
};

init();
