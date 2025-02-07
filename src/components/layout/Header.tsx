import React from "react";
import { Link } from "react-router-dom";

interface NavItem {
	label: string;
	path: string;
}

const NAV_LINKS: NavItem[] = [
	{ label: "About", path: "/about" },
	{ label: "Projects", path: "/projects" },
	{ label: "Contact", path: "/contact" },
];

const NavLink: React.FC<{ item: NavItem }> = ({ item }) => (
	<li>
		<Link
			to={item.path}
			className="hover:text-blue-400 transition duration-200"
		>
			{item.label}
		</Link>
	</li>
);

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
						{NAV_LINKS.map((item) => (
							<NavLink key={item.path} item={item} />
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
