import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';

// Since a Router wrapper can only wrap one child element, use a div to wrap the Navbar and Routes. This allows us to apply a CSS class at the App component level.
const App = (props) => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        {/* When a user visits the root URL, they should see the Home component. */}
        <Route exact path="/" component={Home} />
        <Route exact path="/actors" component={Actors} />
        <Route exact path="/directors" component={Directors} />
        <Route exact path="/movies" component={Movies} />
      </div>
    </Router>
  );
};

export default App
