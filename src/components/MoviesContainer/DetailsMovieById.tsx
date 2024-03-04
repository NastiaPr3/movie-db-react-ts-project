import React, {FC, PropsWithChildren, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import StarRatings from "react-star-ratings";

import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

import {IGenres, IMovie, IPerson} from "../../interfaces";
import {useAppContext, useTheme} from "../../hooks";
import {peopleService} from "../../services";

import css from './DetailsMovieById.module.css'

interface IProps extends PropsWithChildren {
    movById: IMovie,
}

const DetailsMovieById: FC<IProps> = ({movById}) => {

    const {theme} = useTheme();
    let {rating, handleRatingChange, Bar} = useAppContext();
    const navigate = useNavigate();

    const {
        id,
        overview,
        title,
        genres,
        poster_path,
        vote_average,
        original_title,
        production_countries,
        runtime,
        tagline,
        release_date
    } = movById;
    const [people, setPeople] = useState<IPerson[]>([]);
    const [director, setDirector] = useState(null);


    useEffect(() => {
        peopleService.getCast(id).then(({data}) => {
            const {credits} = data;
            const {cast, crew} = credits;

            const cas = cast.filter((person) => person.known_for_department === 'Acting');
            const direct = crew.find(person => person.job === 'Director')
            setDirector(direct.name);
            const sortedCast = cas.sort((a, b) => a.cast_id - b.cast_id).slice(1, 11);
            setPeople(sortedCast);
        })
    }, []);

    rating = vote_average;
    handleRatingChange();
    Bar();

    const genreBadges = genres.map((genre: IGenres, index: number) => (
        <Badge key={index} pill bg="primary">
            {genre.name}
            {genre.id}
        </Badge>
    ));


    const year = release_date.split('-')[0];

    const countryNames = (countries: { name: string }[]) => {
        return countries.map(country => country.name);
    }

    const countries = countryNames(production_countries);

    const handleClick = (genreName: string, genreId: number) => {
        navigate(`/chosenGenre/${genreId}/${genreName.toLowerCase()}`);
    };

    return (
        <div className={css.DetailsMovieById}>

            <div className={css.Head}>
                <button onClick={() => navigate(-1)} className={css.Btn}>Back</button>
                <h1>{title}</h1>
                <h3>{original_title}</h3>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="img"/>

                <StarRatings
                    rating={rating}
                    starRatedColor="#4f4f1c"
                    starHoverColor='yellow'
                    changeRating={handleRatingChange}
                    numberOfStars={10}
                    name='rating'
                    starDimension="20px"
                    starSpacing="2px"
                />

                <p>Release year: {year}</p>
                <div className={css.GenresDiv}>
                    <p>Genres:</p>

                    <Stack direction="horizontal" gap={2}>
                        {genreBadges.map((badge: React.ReactElement, index: number) => (
                            <Badge key={index} pill bg="primary" className={css.Badges}
                                   onClick={() => handleClick(badge.props.children[0], badge.props.children[1])}>
                                {badge.props.children[0]}
                            </Badge>
                        ))}
                    </Stack>

                </div>
                <p>Countries: {countries.join(', ')}</p>
                <p>RunTime: {runtime}min</p>
                <p> {tagline ? 'Slogan: ' : null} {tagline}</p>
                <p>Directed by: {director}</p>

            </div>


            <div className={`${css.Main} ${theme === 'light' ? css.lightBackground : css.darkBackground}`}>

                <h2>Overview:</h2>
                <p>{overview}</p>

                <div className={css.CastDiv}>
                    <h2>Cast:</h2>
                    <div className={css.Cast}>
                        {
                            people.map(hum => <img src={`https://image.tmdb.org/t/p/w500${hum.profile_path}`} alt=""
                                                   className={css.Circle}></img>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export {DetailsMovieById};