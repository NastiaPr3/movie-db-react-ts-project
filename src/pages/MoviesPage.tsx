import {Outlet} from "react-router-dom";

import {Movies} from "../components";


const MoviesPage = () => {
    return (
        <div>
            <Outlet/>
            <Movies/>
        </div>
    );
};

export {MoviesPage};