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


const App = (props) => {
  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <Route path="/">
            <Home />
          </Route>
          <Route path="/actors">
            <Actors />
          </Route>
          <Route path="/directors">
            <Directors />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
        </div>
      </Router>
    </div>
  );
};

export default App
