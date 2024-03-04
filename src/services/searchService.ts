import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMovies} from "../interfaces";

const searchService = {
    getMoviesBySearch: (name: string, page: number):IRes<IMovies> => apiService.get(`${urls.search.base(name)}&page=${page}`)
}

const searchServiceUa = {
    getMoviesBySearch: (name: string, page: number):IRes<IMovies> => apiService.get(`${urls.searchUa.base(name)}&page=${page}`)

}

export {
    searchService,
    searchServiceUa
}