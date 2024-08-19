import React from "react";

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
			{/* activa el footer*/}
		</div>
	);
};

export default Home;
