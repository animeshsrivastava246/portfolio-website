import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
			<h1 className="text-7xl font-extrabold text-red-500">404</h1>
			<h2 className="text-5xl font-semibold text-gray-800 mt-4">
				Oops! Page Not Found
			</h2>
			<p className="text-gray-600 mt-2 max-w-lg">
				The page you're looking for doesn't exist or has been moved. Try using
				the navigation menu or return to the home page.
			</p>
			<Link
				to="/"
				className="mt-6 px-6 py-3 bg-indigo-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
			>
				Go to Home
			</Link>
		</section>
	);
};

export default NotFound;
