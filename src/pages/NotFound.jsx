import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<section className="h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
			<h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
			<h2 className="text-2xl font-semibold text-gray-600 mb-6">
				Oops! Page Not Found
			</h2>
			<p className="text-gray-500 text-center mb-8 max-w-md">
				The page you're looking for doesn't exist or has been moved. Try using
				the navigation menu or return to the home page.
			</p>
			<Link
				to="/"
				className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
			>
				Go to Home
			</Link>
		</section>
	);
};

export default NotFound;
