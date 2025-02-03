import React from "react";
import { Link } from "react-router-dom";

const CTAButtons: React.FC = () => {
	return (
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
	);
};

export default CTAButtons;
