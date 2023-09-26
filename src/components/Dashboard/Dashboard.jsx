import Cart from '../Cart/Cart';
import Menu from '../Menu/Menu';
import ProductList from '../ProductList/ProductList';
import './index.css'

const Dashboard = () => {




    // make a separate page for cart componenet and put it there. add a cart icon in nuvbar which will be clickable and would take you to the cart page.
    return (
        <div id='dashboard'>
            <h1>Dashboard</h1>
            <Menu />
            <ProductList />
            <Cart/>
        </div>
    )
};

export default Dashboard;
