import {createContext, FC, PropsWithChildren, useState} from "react";

interface IProps extends PropsWithChildren {

}

const ButtonContext = createContext(null);

const ButtonContextProvider: FC<IProps> = ({children}) => {

    const [trigger, setTrigger] = useState(null)

    const changeTrigger = () => {
        setTrigger((prev: any) => !prev)
    }


    return (
        <ButtonContext.Provider value={{trigger, changeTrigger}}>
            {children}
        </ButtonContext.Provider>
    );
};

export {
    ButtonContextProvider,
    ButtonContext
};