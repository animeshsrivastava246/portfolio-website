import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<div>
				<Link to="/">
					My Portfolio
				</Link>
				<nav>
					<ul>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/projects">Projects</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
