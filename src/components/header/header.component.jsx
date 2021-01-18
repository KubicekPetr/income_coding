import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
    <div>
        <Link to="/">Home</Link>
        <span>|</span>
        <Link to="/shop">Shop</Link>
        {
            currentUser ?
                (
                    <span>
                        <Link to="#" onClick={() => auth.signOut()}>|Sign out</Link>
                        <CartIcon />
                        {hidden ? null :<CartDropdown />}
                    </span>
                ) :
                <span>
                    |<Link to="/sign-in">Sign in</Link>
                    |<Link to="/sign-up">Sing up</Link>
                </span>
        }
    </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser: currentUser,
    hidden: hidden,
});

export default connect(mapStateToProps)(Header);