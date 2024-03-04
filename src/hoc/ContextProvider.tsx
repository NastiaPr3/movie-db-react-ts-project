import React, {FC, PropsWithChildren, useState, createContext} from "react";
import StarRatings from "react-star-ratings";

interface IProps extends PropsWithChildren {
}

const StarsContext = createContext(null);

const ContextProvider: FC<IProps> = ({children}) => {

    const [rating, setRating] = useState(null);

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    const Bar: FC = () => (
        <StarRatings
            rating={2.403}
        />
    );

    return (
        <StarsContext.Provider value={{rating, handleRatingChange, Bar}}>
            {children}
        </StarsContext.Provider>
    );
};

export {
    ContextProvider,
    StarsContext
};