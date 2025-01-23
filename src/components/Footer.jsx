import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<div>
				<p>
					&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
				</p>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/#about">About</Link>
					<Link to="/#projects">Projects</Link>
					<Link to="/#contact">Contact</Link>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
