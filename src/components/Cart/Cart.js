import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of cart) {
        totalPrice += (product.price * product.quantity);
        totalShipping += product.shipping;
        quantity += product.quantity;
    }
    const tax = parseFloat((totalPrice * 0.1).toFixed(2));
    const grandTotal = (totalPrice + totalShipping + tax).toFixed(2);
    return (
        <div className='cart'>
            <h2 className='cart-title'>Order Summary</h2>
            <div className="cart-info">
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice} </p>
                <p>Total Shipping: ${totalShipping}</p>
                <p>Tax: ${tax}</p>
                <h3>Grand Total: ${grandTotal} </h3>
            </div>
        </div>
    );
};

export default Cart;