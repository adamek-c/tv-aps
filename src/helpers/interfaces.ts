export interface Movies {
	backdrop_path?: string;
	first_air_date: string;
	genre_ids?: {
		0: number;
	};
	id: number;
	name?: string;
	origin_country?: {
		0: string;
	};
	original_language?: string;
	original_name: string;
	overview: string;
	popularity?: number;
	poster_path: string;
	vote_average?: number;
	vote_count: number;
}

export interface Data {
	config?: string[] | number[] | string | number;
	data: {
		page?: number;
		results: Movies[];
		total_pages?: number;
		total_results?: number;
	};
	headers?: string;
	request?: string[] | number[] | string | number;
	status: number;
	statusText?: string;
}
