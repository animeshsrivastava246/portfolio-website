import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
	return (
		<header className="fixed top-2 left-1/2 transform -translate-x-1/2 w-full max-w-2xl bg-gray-500/50 backdrop-blur-md shadow-lg shadow-blue-500/50 rounded-full z-50">
			<div className="flex justify-between items-center py-2 px-4">
				{/* Logo Section */}
				<Link to="/" className="flex items-center">
					<img
						src="/src/assets/icons/logo.webp"
						alt="Logo"
						className="w-8 h-8"
					/>
				</Link>

				{/* Navigation Menu */}
				<nav>
					<ul className="flex space-x-5 text-lg font-bold text-white">
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
