import {IRes} from "../types";
import {IMovies, IGenresList} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";


const genreService = {
    getAllGenres: (): IRes<IGenresList> => apiService.get(urls.genres.base),
    getGenresById: (id: number, page: number): IRes<IMovies> => apiService.get(`${urls.genres.byGenresId(id)}&page=` + page)
}

const genreServiceUa = {
    getAllGenres: (): IRes<IGenresList> => apiService.get(urls.genresUa.base),
    getGenresById: (id: number, page: number): IRes<IMovies> => apiService.get(`${urls.genresUa.byGenresId(id)}&page=` + page)
}

export {
    genreService,
    genreServiceUa
}