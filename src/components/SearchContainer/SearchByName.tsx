import {useEffect, useState} from "react";
import {useLocation, useSearchParams} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {searchService, searchServiceUa} from "../../services";
import {SearchMovie} from "./SearchMovie";

import css from './Search.module.css'
import {useButtonContext} from "../../hooks";


const SearchByName = () => {

    const [movies, setMovies] = useState<IMovie[] | null>(null);
    const [paramsPage, setParamsPage] = useSearchParams({page: '1'});
    const [currentPage, setCurrentPage] = useState<number>(+paramsPage.get('page'));
    const [totalPage, setTotalPage] = useState<number>(0);

    const {trigger} = useButtonContext();
    const {pathname} = useLocation();
    const currentName = pathname.split('/')[2];

    const getAll = async (name: string, page: number) => {
        if (trigger) {
            try {
                const {data} = await searchService.getMoviesBySearch(name, page);
                setMovies(data.results);
                setTotalPage(data.total_pages);
                setCurrentPage(data.page);
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                const {data} = await searchServiceUa.getMoviesBySearch(name, page);
                setMovies(data.results);
                setTotalPage(data.total_pages);
                setCurrentPage(data.page);
            } catch (error) {
                console.error(error);
            }
        }

    }

    const nextPage = () => {
        setCurrentPage(prevState => prevState + 1)
    };

    const prevPage = () => {
        setCurrentPage(prevState => prevState - 1)
    };

    useEffect(() => {
        if (currentName !== undefined) {
            setParamsPage({page: currentPage.toString()})
            getAll(currentName, currentPage)
        }
    }, [currentPage, setParamsPage, currentName, trigger]);

    return (
        <div className={css.MainDiv}>

            <div className={css.ButtonsDiv}>
                <div>
                    <button onClick={prevPage} disabled={currentPage === 1}>
                        <img src={require('../../icons/arrow-back.png')} alt="" className={css.Icon}/>
                    </button>
                </div>
                <div>
                    <button onClick={prevPage} disabled={currentPage === 1}>
                        <img src={require('../../icons/arrow-back.png')} alt="" className={css.Icon}/>
                    </button>
                </div>
            </div>


            <div className={css.Movies}>
                {
                    movies && movies.map(mov => <SearchMovie key={mov.id} mov={mov}/>)
                }
            </div>

            <div className={css.ButtonsDiv}>
                <div>
                    <button onClick={nextPage} disabled={currentPage === totalPage || currentPage >= 500}>
                        <img src={require('../../icons/arrow-next.png')} alt="" className={css.Icon}/>
                    </button>
                </div>
                <div>
                    <button onClick={nextPage} disabled={currentPage === totalPage || currentPage >= 500}>
                        <img src={require('../../icons/arrow-next.png')} alt="" className={css.Icon}/>
                    </button>
                </div>
            </div>


        </div>
    );
};


export {SearchByName};