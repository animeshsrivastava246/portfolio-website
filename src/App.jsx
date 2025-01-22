import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
	return (
		<Router>
			<div className="flex flex-col min-h-screen">
				{/* Header */}
				<Header />

				{/* Main Content */}
				<main className="flex-grow">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/contact" element={<Contact />} />
						{/* Catch-all route */}
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>

				{/* Footer */}
				<Footer />
			</div>
		</Router>
	);
};

export default App;
