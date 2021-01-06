import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage.component'

const TShirtsPage = () => (<>
  <h1>T-shirts</h1>
</>);

const HoodiesPage = () => (<>
  <h1>Hoodies</h1>
</>);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/tshirts' component={TShirtsPage} />
        <Route path='/hoodies' component={HoodiesPage} />
      </Switch>
    </div>
  );
}

export default App;
