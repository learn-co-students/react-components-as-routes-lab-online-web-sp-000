import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router> 
      {
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/movies">
              <Movies />
            </Route>
            <Route exact path="/directors">
              <Directors />
            </Route>
            <Route exact path="/actors">
              <Actors />
            </Route>
            </Switch>
        </div>
      }
    </Router>
  );
};

export default App

// This component already contains a `Router` wrapper where we'll include our
// particular routes. Inside this element, we'll need to render our `Navbar` and 4
// __React Router__ `Route` components with paths to __/, /movies, /directors &
// /actors__ and rendering the respective components. When a user visits the root
// URL, they should see the `Home` component.

// **Note**: Since a `Router` wrapper can only wrap one child element, use a `div` to
// wrap the `Navbar` and `Route`s. This allows us to apply a CSS class at the App
// component level.