import React from "react";
import details from "../data/details.json";
import CTAButtons from "./CTAButtons";

const Hero: React.FC = () => {
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
					<CTAButtons />
				</div>

				{/* Right Image */}
				<div className="md:w-1/2 flex justify-center">
					<img
						src={
							details.personal.image || "/src/assets/images/default-avatar.jpg"
						}
						alt="Hero"
						className="w-80 h-80 md:w-full md:h-auto object-cover rounded-xl shadow-lg"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
