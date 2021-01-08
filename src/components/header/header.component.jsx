import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div>
        <Link to="/">Home</Link>
        <span>|</span>
        <Link to="/shop">Shop</Link>
        <span>|</span>
        <Link to="/sign-in">Sign in</Link>
        <span>|</span>
        <Link to="/sign-up">Sing up</Link>
    </div>
);

export default Header;