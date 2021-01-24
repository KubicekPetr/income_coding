import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

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
                    </span>
                ) :
                <span>
                    |<Link to="/sign-in">Sign in</Link>
                    |<Link to="/sign-up">Sing up</Link>
                </span>
        }
        <CartIcon />
        {hidden ? null : <CartDropdown />}
        <br />
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);