import './index.css'

const Card = ({ productData }) => {
    return (
    <div id="product-card">
        <h1>{productData.title}</h1>
        <img src={productData.image} alt="" />
        <p>{productData.description}</p>
        <p>{productData.price}</p>
    </div>

    )
};

export default Card;
