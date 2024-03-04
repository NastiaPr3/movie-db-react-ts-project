import {NavLink, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

import {useButtonContext, useTheme} from "../../hooks";

import css from './Header.module.css';

const Header = () => {

    const {theme, toggleTheme} = useTheme();
    const {trigger, changeTrigger} = useButtonContext();
    const navigate = useNavigate();

    const {register, reset, handleSubmit} = useForm();

    const submit = (data: any) => {
        if (data.name.includes(' ')) {
            const replaceName = data.name.replace(/\s+/g, '-')
            navigate(`/search/${replaceName}`, {state: {replaceName}});
            reset()
        } else {
            const nm = data.name
            navigate(`search/${data.name}`, {state: {nm}})
            reset()
        }
    }

    return (
        <div
            className={`${css.Header} ${theme === 'light' ? css.lightBackground : css.darkBackground}`}>

            <div className={css.Container}>
                <label className={css.Switch}>
                    <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme}/>
                    <span className={css.Slider}></span>
                </label>
            </div>

            <div className={css.LinkDiv}>
                <NavLink to={'movies'} className={`${theme === 'light' ? css.LightLink : css.MainLink}`}>Movies</NavLink>
            </div>

            <div className={css.Form_and_Button}>
                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" placeholder={'Search movie...'} {...register('name')} className={css.Input}/>
                    <button className={css.SearchButton}>Search</button>
                </form>

                <button onClick={() => changeTrigger(!trigger)} className={css.Language}>{trigger ? 'UA' : 'EU'}</button>
            </div>

            <div className={css.UserDiv}>
                <img src={require('../../icons/icons-user.png')} alt="" className={css.Icon}/>
                <p>user123</p>
            </div>
        </div>
    );
};

export {Header};