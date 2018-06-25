import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import HeaderNav from './Components/HeaderNav';
import Home from './Components/Home';
import Contact from './Components/Contact';
// import Store from './Components/Store';
import Footer from './Components/Footer';

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const NoMatch = ({ location }) => (
  <div className="NotFound text-center">
    <div className="card">

      <div className="card-body">
        <h3 className="card-title">404 - Page not found at <code>{location.pathname}</code></h3>
        <hr />

        <p className="card-text">Return to <NavLink exact to="/">Home Page</NavLink></p>
      </div>
    </div>
  </div>
)

const App = () => {
  return (
    <div className="App">
      <Route component={ScrollToTop} />
      <HeaderNav />

      <Switch>
        <Route exact path="/" url="/index.html" component={Home} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="/store" component={Store} /> */}
        <Route component={NoMatch} />
      </Switch>

      <Footer />


    </div>
  );
};

export default App;
