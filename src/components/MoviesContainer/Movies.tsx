import {useEffect, useState} from "react";

import {IMovie} from "../../interfaces";
import {movieService, movieServiceUa} from "../../services";
import {usePageQuery, useButtonContext} from "../../hooks";
import {Movie} from "./Movie";

import css from './Movies.module.css'

const Movies = () => {

    const {page, prevPage, nextPage} = usePageQuery();
    const {trigger} = useButtonContext();

    const [movies, setMovies] = useState<IMovie[]>([])


    useEffect(() => {
        if (trigger) {
            movieService.getAllMovies(page || '').then(({data}) => {
                const {results} = data;
                setMovies(results);
            })
        } else {
            movieServiceUa.getAllMovies(page || '').then(({data}) => {
                const {results} = data;
                setMovies(results);
            })
        }

    }, [page, trigger]);


    return (
        <div className={css.MainDiv}>
            <div className={css.ButtonsDiv}>
                <div>
                    <button disabled={+page <= 1} onClick={prevPage} className={css.Button}>
                        <img src={require('../../icons/arrow-back.png')} alt="" className={css.Icon}/>
                    </button>
                </div>
                <div>
                    <button disabled={+page <= 1} onClick={prevPage} className={css.Button}>
                        <img src={require('../../icons/arrow-back.png')} alt="" className={css.Icon}/>
                    </button>
                </div>
            </div>

            <div className={css.Movies}>
                {
                    movies.map(movie => <Movie movie={movie} key={movie.id}/>)
                }
            </div>

            <div className={css.ButtonsDiv}>
                <div>
                    <button disabled={+page >= 500} onClick={nextPage}>
                        <img src={require('../../icons/arrow-next.png')} alt="" className={css.Icon}/>
                    </button>
                </div>
                <div>
                    <button disabled={+page >= 500} onClick={nextPage}>
                        <img src={require('../../icons/arrow-next.png')} alt="" className={css.Icon}/>
                    </button>
                </div>
            </div>

        </div>
    );
};

export {Movies};