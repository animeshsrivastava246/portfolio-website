import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<section id="home" className="bg-gray-100 py-20 px-6">
			<div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
				{/* Left Content */}
				<div className="lg:w-1/2 text-center lg:text-left">
					<h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4">
						Hi, I'm <span className="text-blue-500">[Your Name]</span>
					</h1>
					<p className="text-lg text-gray-600 mb-6">
						I’m a passionate web developer specializing in the MERN stack. I
						create clean, responsive, and user-friendly web applications.
					</p>
					<div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-4">
						<Link
							to="/projects"
							className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
						>
							View My Projects
						</Link>
						<Link
							to="/contact"
							className="border border-blue-500 text-blue-500 py-2 px-6 rounded-lg hover:bg-blue-500 hover:text-white transition duration-200"
						>
							Contact Me
						</Link>
					</div>
				</div>

				{/* Right Image */}
				<div className="lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
					<img
						src="/src/assets/images/hero-image.jpg"
						alt="Hero"
						className="w-3/4 lg:w-full rounded-lg shadow-lg"
					/>
				</div>
			</div>
		</section>
	);
};

export default Home;
