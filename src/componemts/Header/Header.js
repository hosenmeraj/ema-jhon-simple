import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <img src={logo} alt="" />
                
            </nav>
            <div>
                    <a href="/shop">Shop</a>
                    <a href="/order">Oder</a>
                    <a href="/book">Inventory</a>
                    <a href="/contact">About</a>
                </div>
        </div>
    );
};

export default Header;