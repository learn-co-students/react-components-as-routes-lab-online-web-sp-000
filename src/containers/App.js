import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Actors from '../components/Actors'
import Directors from '../components/Directors'
import Home from '../components/Home'
import Movies from '../components/Movies'
import NavBar from '../components/NavBar'

const App = props => {
  return (
    <Router>
      <NavBar />
      <Route path='/'>
        <Home />
      </Route>
      <Route path='/movies'>
        <Movies />
      </Route>
      <Route path='/directors'>
        <Directors />
      </Route>
      <Route path='/actors'>
        <Actors />
      </Route>
    </Router>
  )
}

export default App
