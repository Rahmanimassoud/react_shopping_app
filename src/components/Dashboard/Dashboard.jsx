import Menu from '../Menu/Menu';
import ProductList from '../ProductList/ProductList';
import './index.css'

const Dashboard = () => {



    return (
        <div id='dashboard'>
            <h1>Dashboard</h1>
            <Menu />
            <ProductList />
        </div>
    )
};

export default Dashboard;
