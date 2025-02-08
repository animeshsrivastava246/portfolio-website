import React from "react";
import { Link } from "react-router-dom";

interface NavItem {
	label: string;
	path: string;
}

const NAV_LINKS: NavItem[] = [
	{ label: "Home", path: "/" },
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

const Footer: React.FC = () => {
	return (
		<footer className="w-full max-w-3xl mx-auto bg-gray-500/50 backdrop-blur-md shadow-lg shadow-blue-500/50 rounded-xl my-4">
			<div className="flex flex-col md:flex-row justify-between items-center py-4 px-6 text-white">
				{/* Copyright */}
				<p className="text-sm">
					&copy; {new Date().getFullYear()} My Portfolio
				</p>

				{/* Navigation Menu */}
				<nav>
					<ul className="flex space-x-5 text-sm font-bold">
						{NAV_LINKS.map((item) => (
							<NavLink key={item.path} item={item} />
						))}
					</ul>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
