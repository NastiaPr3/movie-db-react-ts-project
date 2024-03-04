import React, {FC, PropsWithChildren} from "react";
import StarRatings from "react-star-ratings";
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {useAppContext, useTheme} from "../../hooks";

import css from './ClickedGenreDiv.module.css'

interface IProps extends PropsWithChildren {
    chosen: IMovie
}

const ClickedGenre:FC<IProps> = ({chosen}) => {

    const { theme } = useTheme();
    const navigate = useNavigate();
    let {rating, handleRatingChange, Bar} = useAppContext();

    const {id, title, poster_path, vote_average} = chosen;

    rating = vote_average;
    handleRatingChange();
    Bar()

    return (
        <div className={`${css.ClickedGenreDiv} ${theme === 'light' ? css.lightBackground : css.darkBackground}`} onClick={() => navigate('/moviesId', {state: {id}})}>
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

export {ClickedGenre};