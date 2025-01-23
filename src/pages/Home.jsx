import React from "react";
import { Link } from "react-router-dom";
import details from "../data/details.json";

const Home = () => {
	return (
		<section id="home">
			<div>
				{/* Left Content */}
				<div>
					<h1>
						Hi, I'm <span>{details.personal.name}</span>
					</h1>
					<p>
						{details.personal.bio}
					</p>
					<div>
						<Link to="/projects">View My Projects</Link>
						<Link to="/contact">Contact Me</Link>
					</div>
				</div>

				{/* Right Image */}
				<div>
					<img src="/src/assets/images/hero-image.jpg" alt="Hero" />
				</div>
			</div>
		</section>
	);
};

export default Home;
