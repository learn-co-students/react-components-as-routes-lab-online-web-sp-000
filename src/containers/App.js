import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Movies from "../components/Movies";
import Directors from "../components/Directors";
import Actors from "../components/Actors";

const App = (props) => {

	return (
		<Router>
			<div>
				<NavBar />
				<Route path="/" exact component={Home} />
				<Route path="/movies" exact component={Movies} />
				<Route path="/directors" exact component={Directors} />
				<Route path="/actors" exact component={Actors} />
			</div>
		</Router>
	)

}

export default App
