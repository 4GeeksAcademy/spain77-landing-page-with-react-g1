import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Card } from "./Card.jsx";
import { Jumbotron } from "./jumbotron.jsx";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div className="d-flex flex-column min-vh-100">
			<Navbar/>
			<Card/>
			<Jumbotron/>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
