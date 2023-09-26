import { primaryContext } from "../../Context/primaryContext";
import Card from "../Card/Card";
import "./index.css";

import { useContext } from "react";

const Cart = () => {

    const { cart, products } = useContext(primaryContext)  //we need these 2 peaces of information from context to show here


    // cartItem looks like this, {productId: 5, numberOfItems: 2} 

    let arrayOfCards = cart.map((cartItem) => {
        let correctProduct = products.find((prod) => {
            if(prod.id === cartItem.productId) {
                return true
            } else {
                return false
            }
        })
        return <Card 
        key={correctProduct.title}
        productData={correctProduct}
        numberOfItems={cartItem.numberOfItems}
        />
    })

    return (
        <div>
            <h1>Cart</h1>
            {/* map through the cart, making a Card for each product in the cart */}
            {arrayOfCards}

        </div>
    )
};

export default Cart;
