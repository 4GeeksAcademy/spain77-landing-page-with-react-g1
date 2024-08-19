import React from "react";
import { Footer } from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar.jsx";
import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div className="d-flex flex-column min-vh-100">
			<Navbar/>
			<Card/>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
