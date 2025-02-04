import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
	return (
		<header className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
			<div className="container mx-auto flex justify-between items-center py-4 px-6">
				{/* Logo Section */}
				<Link
					to="/"
					className="text-2xl font-bold hover:text-blue-400 transition duration-200"
				>
					<img src="/src/assets/icons/logo.png" alt="Logo" />
				</Link>

				{/* Navigation Menu */}
				<nav>
					<ul className="flex space-x-6 text-lg">
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
			</div>
		</header>
	);
};

export default Header;
