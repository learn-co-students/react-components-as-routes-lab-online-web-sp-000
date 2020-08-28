import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      {/*{code here}*/}
      <div>
        <NavBar />
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/actors" component={Actors} />
          <Route path="/directors" component={Directors} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App
