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


const App = (props) => {
  return (
    <Router>
      <div>
        <nav>
            <NavBar />
          <ul>
            <li>
              <link to='/'>Home</link>
            </li>
            <li>
              <link to='/actors'>Actors</link>
            </li>
            <li>
              <link to='/directors'>Directors</link>
            </li>
            <li>
              <link to='/movies'>Movies</link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/actors'>
            <Actors />
          </Route>
          <Route path='/directors'>
            <Directors />
          </Route>
          <Route path='/movies'>
            <Movies />
          </Route>
        </Switch>
      </div>
  
    </Router>
  );
};

export default App
