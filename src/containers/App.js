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
      <NavBar>Links</NavBar>
      <Route path="/" component={Home}>Home</Route>
      <Route path="/actors" component={Actors}>Actors</Route>
      <Route path="/directors" component={Directors}>Directors</Route>
      <Route path="/movies" component={Movies}>Movies</Route>
    </Router>
  );
};

export default App
