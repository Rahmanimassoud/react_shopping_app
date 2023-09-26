import React, { useState } from "react";
import { createContext } from "react";
// import this

// create context

// create Provider and add states

// return provider.JSX

export const primaryContext = createContext(); //this what components would import


const PrimaryProvider = (props) => {

    const [products, setProducts] = useState([])   //our states
    const [cart, setCart] = useState([])   //our states
    console.log({cart});
    
    // let exampleObject = {
    //     product: {},
    //     number: 3
    // }

    console.log(products);

    return (
        <primaryContext.Provider value={{
            products: products,
            setProducts: setProducts,
            cart: cart,
            setCart: setCart

        }}>
            {props.children}

        </primaryContext.Provider>
    )

}

export default PrimaryProvider