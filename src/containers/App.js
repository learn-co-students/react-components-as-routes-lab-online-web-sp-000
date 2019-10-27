import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = () => {
  return (
    <Router>
      {<div>
        <nav>
          <NavBar />
        </nav>
        <Switch>
          <Route path="/actors">
            <Actors />
          </Route>
          <Route path="/directors">
            <Directors />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>}
    </Router>
  );
};

export default App
