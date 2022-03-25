import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {addToCartHandler, product} = props;
    const {img, name, price, seller,ratings} = product;
    
    return (
        <div className='product'>
            <img src={img} alt={name} className = 'product-img' />
            <div className="product-info">
                <h3 className='product-name'>{name}</h3>
                <p className="product-price">Price: ${price}</p>
                <p className="manufacturer">Manufacturer: {seller}</p>
                <p className="ratings">Ratings: {ratings} Stars</p>
            </div>
            <button onClick = {() => addToCartHandler(product)} className='cart-btn'>Add to Cart <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;