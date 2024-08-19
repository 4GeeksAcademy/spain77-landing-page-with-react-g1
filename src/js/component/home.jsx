import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Card } from "./Card.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Footer } from "./Footer.jsx";



//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div className="d-flex flex-column min-vh-100">
			<Navbar/>
			<Jumbotron/>
			<Card/>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
