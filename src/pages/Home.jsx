import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<section id="home">
			<div>
				{/* Left Content */}
				<div>
					<h1>
						Hi, I'm <span>[Your Name]</span>
					</h1>
					<p>
						I’m a passionate web developer specializing in the MERN stack. I
						create clean, responsive, and user-friendly web applications.
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
