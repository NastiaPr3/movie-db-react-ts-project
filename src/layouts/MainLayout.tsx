import {Outlet} from "react-router-dom";

import {Genres, Header} from "../components";
import {useTheme} from "../hooks";

import css from './Main.module.css'

const MainLayout = () => {
    const { theme } = useTheme();
    return (
        <div className={`${theme === 'light' ? css.lightBackground : css.darkBackground}`}>
            <Header/>
            <Genres/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};