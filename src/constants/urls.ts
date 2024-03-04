const baseURL = 'https://api.themoviedb.org';
const API_KEY = 'api_key=89c280d9540eb692d6636c6c77c4b05a';
const language = 'language=uk-UA'

const movies = '/3/discover/movie';
const movieById = '/3/movie';

const genres = '/3/genre/movie/list';

const search = '/3/search/movie'


const urls = {
    movies: {
        base: `${movies}?${API_KEY}`,
        byId: (id: number) => `${movieById}/${id}?${API_KEY}`
    },

    moviesUa: {
        base: `${movies}?${API_KEY}&${language}`,
        byId: (id: number) => `${movieById}/${id}?${API_KEY}&${language}`
    },

    genres: {
        base: `${genres}?${API_KEY}`,
        byGenresId: (id: number) => `${movies}?${API_KEY}&with_genres=${id}`
    },

    genresUa: {
        base: `${genres}?${API_KEY}&${language}`,
        byGenresId: (id: number) => `${movies}?${API_KEY}&with_genres=${id}&${language}`
    },

    people: {
        base: (id: number) =>  `${movieById}/${id}?${API_KEY}&append_to_response=credits`
    },

    search: {
        base: (name: string) => `${search}?${API_KEY}&query=${name}`
    },

    searchUa: {
        base: (name: string) => `${search}?${API_KEY}&query=${name}&${language}`
    }
}

export {
    baseURL,
    urls
}