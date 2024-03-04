import React, {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";
import StarRatings from "react-star-ratings";

import {IMovie} from "../../interfaces";
import {useAppContext} from "../../hooks";

import css from "../MoviesContainer/MovieDiv.module.css";


interface IProps extends PropsWithChildren {
    mov: IMovie
}

const SearchMovie: FC<IProps> = ({mov}) => {

    const {id, title, poster_path, vote_average} = mov;
    const navigate = useNavigate();
    let {rating, handleRatingChange, Bar} = useAppContext();

    rating = vote_average;
    handleRatingChange();
    Bar()

    return (
            <div className={css.MovieDiv} onClick={() => navigate('/moviesId', {state: {id}})}>
                 <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt=""/>
                 <p>{title}</p>

                 <StarRatings
                     rating={rating}
                     starRatedColor="#4f4f1c"
                     starHoverColor='yellow'
                     changeRating={handleRatingChange}
                     numberOfStars={10}
                     name='rating'
                     starDimension="17px"
                     starSpacing="2px"
                 />
        </div>



    );
};

export {SearchMovie};