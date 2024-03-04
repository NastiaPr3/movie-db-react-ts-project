import React, {createContext, FC, PropsWithChildren, useState} from 'react';

interface IProps extends PropsWithChildren {

}

const ThemeContext = createContext(null);

const ThemeProvider:FC<IProps> = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};


export {
    ThemeProvider,
    ThemeContext
}