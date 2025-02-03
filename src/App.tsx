import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NotFound from "./pages/NotFound";
import details from "./data/details.json";

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./components/sections/About"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Contact = lazy(() => import("./components/sections/Contact"));

const App: React.FC = () => {
	return (
		<Router>
			<Helmet>
				<title>
					{details.personal.name} | {details.personal.profession}
				</title>
				<meta
					name="description"
					content="Explore my portfolio and projects built with the MERN stack."
				/>
			</Helmet>

			<div className="app-container">
				{/* Header */}
				<Header />

				{/* Main Content */}
				<main className="app-main" role="main">
					<Suspense fallback={<div className="loading">Loading...</div>}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/projects" element={<Projects />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</Suspense>
				</main>

				{/* Footer */}
				<Footer />
			</div>
		</Router>
	);
};

export default App;
