import React, { useState } from "react";
import { createContext } from "react";
// import this

// create context

// create Provider and add states

// return provider.JSX

export const primaryContext = createContext(); //this what components would import


const PrimaryProvider = (props) => {

    const [products, setProducts] = useState([])   //our states

    console.log(products);

    return (
        <primaryContext.Provider value={{
            products: products,
            setProducts: setProducts
        }}>
            {props.children}

        </primaryContext.Provider>
    )

}

export default PrimaryProvider