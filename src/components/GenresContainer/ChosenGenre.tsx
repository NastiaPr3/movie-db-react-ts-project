import {useEffect, useState} from "react";
import {useLocation, useSearchParams} from "react-router-dom";

import {genreService, genreServiceUa} from "../../services";
import {IMovie} from "../../interfaces";
import {ClickedGenre} from "./ClickedGenre";
import {useButtonContext} from "../../hooks";

import css from './GenresCards.module.css';


const ChosenGenre = () => {
    const [paramsPage, setParamsPage] = useSearchParams({page: '1'});
    const [chosenGenre, setChosenGenre] = useState<IMovie[] | null>(null);
    const [currentPage, setCurrentPage] = useState(+paramsPage.get('page'));

    const {pathname} = useLocation();

    const currentGenreId = +pathname.split('/')[2];

    const {trigger} = useButtonContext();

    const getAll = async (id: number, page: number) => {
        if (trigger) {
            try {
                const {data} = await genreService.getGenresById(id, page);
                setChosenGenre(data.results);
                setCurrentPage(data.page);
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                const {data} = await genreServiceUa.getGenresById(id, page);
                setChosenGenre(data.results);
                setCurrentPage(data.page);
            } catch (error) {
                console.error(error);
            }
        }
    };

    const next = () => {
        setCurrentPage(prev => prev + 1);
    };

    const prev = () => {
        setCurrentPage(prev => prev - 1);
    };

    useEffect(() => {
        setParamsPage({page: currentPage.toString()});
        getAll(currentGenreId, currentPage);

    }, [currentPage, setParamsPage, currentGenreId, trigger]);

    return (
        <div className={css.MainDiv}>
            <div className={css.ButtonsDiv}>
                <div>
                    <button onClick={prev} disabled={currentPage === 1}>
                        <img src={require('../../icons/arrow-back.png')} alt="" className={css.Icon}/>
                    </button>
                </div>
                <div>
                    <button onClick={prev} disabled={currentPage === 1}>
                        <img src={require('../../icons/arrow-back.png')} alt="" className={css.Icon}/>
                    </button>
                </div>
            </div>

            <div className={css.GenresCards}>
                {
                    chosenGenre && chosenGenre.map(chosen => <ClickedGenre key={chosen.id} chosen={chosen}/>)
                }
            </div>

            <div className={css.ButtonsDiv}>
                <div>
                    <button onClick={next} disabled={currentPage >= 500}>
                        <img src={require('../../icons/arrow-next.png')} alt="" className={css.Icon}/>
                    </button>
                </div>
                <div>
                    <button onClick={next} disabled={currentPage >= 500}>
                        <img src={require('../../icons/arrow-next.png')} alt="" className={css.Icon}/>
                    </button>
                </div>
            </div>

        </div>
    );
};

export {ChosenGenre};
