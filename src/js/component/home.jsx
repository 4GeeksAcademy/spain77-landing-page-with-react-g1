import React from "react";
import { Footer } from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
			<Footer />
		</div>
	);
};

export default Home;
