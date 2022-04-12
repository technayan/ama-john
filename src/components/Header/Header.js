import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <a href="/"><img src={Logo} alt="Ama Jogn" /></a>
            <div className="menu">
                <Link to='/shop'>Shop</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/order-review'>Order Review</Link>
            </div>
        </nav>
    );
};

export default Header;