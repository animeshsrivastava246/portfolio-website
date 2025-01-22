import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="bg-white shadow-md fixed top-0 w-full z-50">
			<div className="container mx-auto flex items-center justify-between px-4 py-3">
				<Link to="/" className="text-2xl font-bold text-gray-800">
					My Portfolio
				</Link>
				<nav>
					<ul className="flex space-x-6 text-gray-600">
						<li>
							<Link to="/about" className="hover:text-gray-900">
								About
							</Link>
						</li>
						<li>
							<Link to="/projects" className="hover:text-gray-900">
								Projects
							</Link>
						</li>
						<li>
							<Link to="/contact" className="hover:text-gray-900">
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
