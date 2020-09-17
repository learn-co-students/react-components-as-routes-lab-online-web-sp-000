import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';

const notFound = () => <div><h1>NOT FOUND 404!!!</h1><Link to="/">GO HOME</Link></div>

const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/actors" component={Actors} />
          <Route exact path="/directors" component={Directors} />
          <Route exact path="/movies" component={Movies} />
          <Route component={notFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App
