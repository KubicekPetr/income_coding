import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div>
        <Link to="/">Home</Link>
        <span>|</span>
        <Link to="/shop">Shop</Link>
    </div>
);

export default Header;