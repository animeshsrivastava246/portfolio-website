import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-gray-300 py-6">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
				<p className="text-sm text-center md:text-left">
					&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
				</p>
				<nav className="flex space-x-4 mt-4 md:mt-0">
					<Link to="/" className="hover:text-white">
						Home
					</Link>
					<Link to="/#about" className="hover:text-white">
						About
					</Link>
					<Link to="/#projects" className="hover:text-white">
						Projects
					</Link>
					<Link to="/#contact" className="hover:text-white">
						Contact
					</Link>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
