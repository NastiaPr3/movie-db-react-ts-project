import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";

import {router} from "./router";
import {ContextProvider, ButtonContextProvider, ThemeProvider} from "./hoc";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ContextProvider>
        <ButtonContextProvider>
            <ThemeProvider>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </ButtonContextProvider>
    </ContextProvider>
);


