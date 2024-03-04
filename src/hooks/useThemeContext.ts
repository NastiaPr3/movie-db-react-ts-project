import {useContext} from "react";
import {ThemeContext} from "../hoc";

export const useTheme = () => useContext(ThemeContext);

