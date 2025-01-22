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
		<section id="projects" className="bg-white py-12 px-6">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
					My Projects
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<div
							key={project.id}
							className="bg-gray-100 rounded-lg shadow-lg overflow-hidden"
						>
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-4">
								<h3 className="text-xl font-bold text-gray-800">
									{project.title}
								</h3>
								<p className="text-gray-600 mt-2">{project.description}</p>
								<div className="mt-4 flex justify-between">
									<a
										href={project.demoLink}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-500 hover:text-blue-700"
									>
										Live Demo
									</a>
									<a
										href={project.codeLink}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-500 hover:text-blue-700"
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
