import {useEffect, useState} from "react";

import {IGenres} from "../../interfaces";
import {Genre} from "./Genre";
import {useButtonContext, useTheme} from "../../hooks";
import {genreService, genreServiceUa} from "../../services";

import css from './Genres.module.css'

const Genres = () => {

    const {theme} = useTheme();
    const {trigger} = useButtonContext();

    const [genr, setGenr] = useState<IGenres[]>([])

    useEffect(() => {
        if (trigger) {
            genreService.getAllGenres().then(({data}) => {
                const {genres} = data;
                setGenr(genres)
            })
        } else {
            genreServiceUa.getAllGenres().then(({data}) => {
                const {genres} = data;
                setGenr(genres)
            })
        }
    }, [trigger]);

    return (
        <div className={`${css.Genres} ${theme === 'light' ? css.lightBackground : css.darkBackground}`}>
                {
                    genr.map(genre => <Genre key={genre.id} genre={genre}/>)
                }
        </div>
    );
};

export {Genres};