import { useContext } from 'react';
import './index.css'
import { primaryContext } from '../../Context/primaryContext';

const Sidebar = () => {

    const {cart} = useContext(primaryContext);


    let totalNumber = cart.reduce((total, cartItem) => {
        return total + cartItem.numberOfItems;
    }, 0)

    // you can show the price, using this function but you have to go and get the price like you got the number.
    // let totalPrice = cart.reduce((total, cartItem) => {
    //     return total + cartItem.numberOfItems;
    // }, 0)

    return (
        <aside id="aside">
            <h1>sidebar</h1>
            <p>You have {totalNumber} items in your cart</p>
        </aside>
    )
};

export default Sidebar;
