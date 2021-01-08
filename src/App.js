import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/home/home.page';
import ShopPage from './pages/shop/shop.page';
import SignIn from './pages/sign-in/sing-in.page';
import SignUp from './pages/sign-up/sign-up.page';

import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
