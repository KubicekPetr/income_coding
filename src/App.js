import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import './App.css';

import HomePage from './pages/home/home.page';
import ShopPage from './pages/shop/shop.page';
import SignInPage from './pages/sign-in/sing-in.page';
import SignUpPage from './pages/sign-up/sign-up.page';
import CheckoutPage from './pages/checkout/checkout.page';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.acitons';

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    // this simulated componentWillUnmount but after unmnout
    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route path="/sign-in" render={() => currentUser ? <Redirect to='/' /> : <SignInPage />} />
        <Route path="/sign-up" render={() => currentUser ? <Redirect to='/' /> : <SignUpPage />} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
