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
		<section id="projects">
			<div>
				<h2>My Projects</h2>
				<div>
					{projects.map((project) => (
						<div key={project.id}>
							<img src={project.image} alt={project.title} />
							<div>
								<h3>{project.title}</h3>
								<p>{project.description}</p>
								<div>
									<a
										href={project.demoLink}
										target="_blank"
										rel="noopener noreferrer"
									>
										Live Demo
									</a>
									<a
										href={project.codeLink}
										target="_blank"
										rel="noopener noreferrer"
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
