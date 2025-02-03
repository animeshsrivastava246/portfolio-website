import React from "react";
import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";

const Home: React.FC = () => {
	return (
		<main className="flex flex-col items-center">
			<section id="hero" className="w-full">
				<Hero />
			</section>

			<section id="skills" className="w-full">
				<Skills />
			</section>
		</main>
	);
};

export default Home;
