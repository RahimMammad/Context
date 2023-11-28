import React, { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);

    const addToBasket = (item) => {
        const productIndex = basket.findIndex((basketItem) => basketItem.id === item.id);

        if (productIndex !== -1) {
            const updatedBasket = basket.map((basketItem, index) => {
                if (index === productIndex) {
                    return {
                        ...basketItem,
                        clickCount: basketItem.clickCount + 1
                    };
                }
                return basketItem;
            });
            setBasket(updatedBasket);
        } else {
            setBasket([...basket, { ...item, clickCount: 1 }]);
        }
    };

    const removeBasket = (index) => {
        const updatedBasket = [...basket];
        updatedBasket.splice(index, 1);
        setBasket(updatedBasket);
    };

    const basketContextValue = {
        basket,
        addToBasket,
        removeBasket
    };

    return (
        <BasketContext.Provider value={basketContextValue}>
            {children}
        </BasketContext.Provider>
    );
};

export const useBasket = () => {
    const context = useContext(BasketContext);
    return context;
};
