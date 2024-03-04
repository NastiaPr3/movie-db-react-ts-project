export interface IMovies{
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export interface IMovie {
    results: any,
    id: number,
    title: string,
    poster_path: string,
    vote_average: number,
    overview: string,
    genres: any,
    original_title: string,
    production_countries: any,
    release_date: string,
    runtime: number,
    tagline: string
}
