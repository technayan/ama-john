import React from 'react';
import Logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <a href="/home"><img src={Logo} alt="Ama Jogn" /></a>
            <div className="menu">
                <a href="/order">Order</a>
                <a href="/order-review">Order Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
            </div>
        </nav>
    );
};

export default Header;