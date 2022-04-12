import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewProduct.css'

const ReviewProduct = (props) => {
    const {product, handleRemoveProduct} = props;
    const {name, price, img, quantity, shipping} = product;
    return (
        <div className='review-product'>
            <img className='review-product-img' src={img} alt={name} />
            <div className="review-product-info">
                <div className="review-product-details">
                    <h3>{name}</h3>
                    <p>Price : ${price}</p>
                    <p>Quantity : {quantity}</p>
                    <p>Shipping Charge : ${shipping * quantity}</p>
                </div>
                <button className='delete-btn' onClick={()=> handleRemoveProduct(product)}><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default ReviewProduct;