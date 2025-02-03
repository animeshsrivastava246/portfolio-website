import React from "react";
import details from "../../data/details.json";

const Skills: React.FC = () => {
	return (
		<section id="skills" className="py-16 bg-gray-100">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
					My Skills
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
					{details.skills.map((skill) => (
						<div
							key={skill.name}
							className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
						>
							<img
								src={skill.icon}
								alt={skill.name}
								className="w-16 h-16 mb-4"
							/>
							<p className="text-lg font-medium text-gray-700">{skill.name}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
