import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import {IGenres} from "../../interfaces";
import {useTheme} from "../../hooks";

import css from './Genres.module.css'

interface IProps extends PropsWithChildren {
    genre: IGenres
}

const Genre: FC<IProps> = ({genre}) => {

    const {theme} = useTheme();
    const navigate = useNavigate();

    const {id, name} = genre;

    const handleClick = () => {
        navigate(`/chosenGenre/${id}/${name.toLowerCase()}`);
    };

    return (
        <div className={`${theme === 'light' ? css.LightLinker : css.Linker}`}>
            <button onClick={handleClick}>{name}</button>
        </div>
    );
};

export {Genre};