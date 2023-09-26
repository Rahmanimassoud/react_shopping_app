import { useContext } from 'react';
import './index.css'
import  { primaryContext } from '../../Context/primaryContext';

const Card = ({ productData, numberOfItems }) => {


    const { cart, setCart } = useContext(primaryContext)



    const handelClick = () => {
        // when the button clicked, set everything which was already in the cart, plus this new item.

        // check if the item is already in the cart.
        let indexInCart = cart.findIndex((itemInCart) => {
            // return boolean, ture or false is there the item we are looking for.
            if(itemInCart.productId === productData.id) {
                return true
            } else {
                return false
            }
        })
        // if true, return the index of the product else returns -1


        const newCart = [...cart];

        if(indexInCart === -1) {
            newCart.push({productId: productData.id, numberOfItems: 1})
        } else {
            newCart[indexInCart].numberOfItems++;
        }
        setCart(newCart);
    }

    return (
    <div id="product-card">
        {numberOfItems === undefined ? <></> : <button>Remove from cart</button>}
        {numberOfItems === undefined ? <></> : <span>{numberOfItems}</span>}
        <button onClick={handelClick}>add to cart</button>
        <h1>{productData.title}</h1>
        <img src={productData.image} alt={productData.title} />
        <p>{productData.description}</p>
        <p>{productData.price}</p>
        <p>rating: {productData.rating.rate}</p>
    </div>
    )
};

export default Card;
