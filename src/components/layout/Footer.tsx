import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				<p className="footer-text">
					&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
				</p>
				<nav className="footer-nav">
					<Link to="/" className="footer-link">
						Home
					</Link>
					<Link to="/about" className="footer-link">
						About
					</Link>
					<Link to="/projects" className="footer-link">
						Projects
					</Link>
					<Link to="/contact" className="footer-link">
						Contact
					</Link>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
