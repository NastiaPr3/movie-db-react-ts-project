import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import {movieService, movieServiceUa} from "../../services";
import {DetailsMovieById} from "./DetailsMovieById";
import {useButtonContext} from "../../hooks";

const MovieById = () => {

    const {state} = useLocation();
    const {trigger} = useButtonContext();

    const [movieById, setMovieById] = useState([]);

    useEffect(() => {
        if (trigger) {
            movieService.getMovieById(state.id).then(({data}) => {
                const result = [];
                result.push(data)
                setMovieById(result)
            })
        } else {
            movieServiceUa.getMovieById(state.id).then(({data}) => {
                const result = [];
                result.push(data)
                setMovieById(result)
            })
        }

    }, [trigger, state.id]);


    return (
        <div>
            {
                movieById.map(movById => <DetailsMovieById key={movById.id} movById={movById}/>)
            }
        </div>
    );
};

export {MovieById};