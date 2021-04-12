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
    <Router>
      <div>
        <NavBar>
          <ul>
            <li>
              <Route path="/" component={Home}/>
            </li>
            <li>
              <Route path="/movies" component={Movies}/>
            </li>
            <li>
              <Route path="/directors" component={Directors}/>
            </li>
            <li>
              <Route path="/actors" component={Actors}/>
            </li>
         </ul>
        </NavBar>
      </div>
    </Router>
  );
};

export default App
