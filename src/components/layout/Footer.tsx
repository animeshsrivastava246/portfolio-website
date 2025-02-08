import React from "react";
import { Link } from "react-router-dom";
import details from "../../data/details.json";

const Footer: React.FC = () => {
	return (
		<footer className="w-full max-w-3xl mx-auto bg-gray-500/50 backdrop-blur-md shadow-lg shadow-blue-500/50 rounded-xl my-4">
			<div className="flex flex-col md:flex-row justify-between items-center py-4 px-6 text-white">
				{/* Copyright */}
				<p className="text-sm">
					&copy; {new Date().getFullYear()} {details.personal.name}
				</p>

				{/* Navigation Menu */}
				<nav>
					<ul className="flex space-x-5 text-sm font-bold">
						<li>
							<Link
								to="/"
								className="hover:text-blue-400 transition duration-200"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/about"
								className="hover:text-blue-400 transition duration-200"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								to="/projects"
								className="hover:text-blue-400 transition duration-200"
							>
								Projects
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								className="hover:text-blue-400 transition duration-200"
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>

				{/* Social Icons */}
				<div className="flex space-x-4">
					{Object.entries(details.socialMedia).map(([key, { url, icon }]) => (
						<a
							key={key}
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							className="hover:opacity-75 transition duration-200"
						>
							<img src={icon} alt={key} className="w-6 h-6" />
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
