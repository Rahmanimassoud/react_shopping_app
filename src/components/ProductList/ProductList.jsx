import { useContext } from "react";
import "./index.css";
import { primaryContext } from "../../Context/primaryContext";
import Card from "../Card/Card";

const ProductList = () => {

    // WE NEED THE PRODUCT ARRAY HERE SO WE CAN SHOW IT
    const {products} = useContext(primaryContext)


    return (
        <div id="product-list">
            {
                products.map((eachProduct) => {
                    return <Card key={eachProduct.id} productData = {eachProduct}/>
                })
            }
        </div>
    )
};

export default ProductList;

// instead of returning all this in the above return statment, we can return a card for each one of the product and import card component in the productList to show it.

{/* <div id="product-card" key={eachProduct.id}>
                        <h1>{eachProduct.title}</h1>
                        <img src={eachProduct.image} alt="" />
                        <p>{eachProduct.description}</p>
                        <p>{eachProduct.price}</p>
                    </div> */}