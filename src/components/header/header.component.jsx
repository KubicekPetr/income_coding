import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
    <div>
        <Link to="/">Home</Link>
        <span>|</span>
        <Link to="/shop">Shop</Link>
        {
            currentUser ?
                <Link to="#" onClick={() => auth.signOut()}>|Sign out</Link> :
                <span>
                    |<Link to="/sign-in">Sign in</Link>
                    |<Link to="/sign-up">Sing up</Link>
                </span>
        }
    </div>
);

export default Header;