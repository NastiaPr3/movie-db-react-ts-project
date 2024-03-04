import css from './NotFound.module.css';

const NotFoundPage = () => {
    return (
        <div className={css.NotFound}>
            <div>
                Oops, something went wrong!
                Do you want to know exactly what went wrong? Please wait until the developer regains strength to write the code for this :))
            </div>
        </div>
    );
};

export {NotFoundPage};