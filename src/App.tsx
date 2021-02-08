import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigator from './components/includes/Navigator'
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'
import Footer from './components/includes/Footer';
import Cart from './components/pages/Cart';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigator />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
