import React from "react";
import { Link } from "react-router-dom";
import details from "../data/details.json";

const Home = () => {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12"
		>
			<div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
				{/* Left Content */}
				<div className="text-center md:text-left md:w-1/2 space-y-6">
					<h1 className="text-4xl font-extrabold text-gray-800 leading-tight">
						Hi, I'm{" "}
						<span className="text-blue-600">{details.personal.name}</span>
					</h1>
					<p className="text-lg text-gray-600">{details.personal.bio}</p>
					<div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
						<Link
							to="/projects"
							className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-all"
						>
							View My Projects
						</Link>
						<Link
							to="/contact"
							className="border border-blue-500 text-blue-500 py-3 px-6 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
						>
							Contact Me
						</Link>
					</div>
				</div>

				{/* Right Image */}
				<div className="md:w-1/2 flex justify-center">
					<img
						src="/src/assets/images/hero-image.jpg"
						alt="Hero"
						className="w-80 h-80 md:w-full md:h-auto object-cover rounded-xl shadow-lg"
					/>
				</div>
			</div>
		</section>
	);
};

export default Home;
