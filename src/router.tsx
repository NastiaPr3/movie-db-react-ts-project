import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage, MoveIdPage, SearchPage, NotFoundPage} from "./pages";
import {ChosenGenre} from "./components";

let router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <NotFoundPage/>, children: [
            {
                index: true, element: <Navigate to={'movies'}/>
            },

            {
                path: 'movies', element: <MoviesPage/>
            },

            {
                path: 'moviesId', element: <MoveIdPage/>
            },

            {
                path: 'chosenGenre/:id/:name', element: <ChosenGenre/>
            },

            {
                path: 'search/:name', element: <SearchPage/>
            }

        ]
    }

]);

export {
    router
}