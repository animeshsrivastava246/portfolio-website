import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<section>
			<h1>404</h1>
			<h2>Oops! Page Not Found</h2>
			<p>
				The page you're looking for doesn't exist or has been moved. Try using
				the navigation menu or return to the home page.
			</p>
			<Link to="/">Go to Home</Link>
		</section>
	);
};

export default NotFound;
