import React, { useEffect, useState } from "react";

const Projects = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		// Fetch project details from the JSON file
		fetch("/src/data/projects.json")
			.then((response) => response.json())
			.then((data) => setProjects(data))
			.catch((error) => console.error("Error fetching projects:", error));
	}, []);

	return (
		<section id="projects" className="py-16 bg-gray-100">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
					My Projects
				</h2>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<div
							key={project.id}
							className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
						>
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-56 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-800">
									{project.title}
								</h3>
								<p className="text-gray-600 mt-2">{project.description}</p>
								<div className="mt-4 flex space-x-4">
									<a
										href={project.demoLink}
										target="_blank"
										rel="noopener noreferrer"
										className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
									>
										Live Demo
									</a>
									<a
										href={project.codeLink}
										target="_blank"
										rel="noopener noreferrer"
										className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
									>
										Source Code
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
