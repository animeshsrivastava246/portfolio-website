import React from "react";

const About = () => {
	return (
		<section id="about" className="bg-gray-100 py-12 px-6">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
					About Me
				</h2>
				<div className="flex flex-col md:flex-row items-center">
					{/* Image Section */}
					<div className="w-full md:w-1/3 mb-6 md:mb-0">
						<img
							src="/src/assets/images/profile.jpg"
							alt="About me"
							className="rounded-lg shadow-lg mx-auto"
						/>
					</div>
					{/* Text Section */}
					<div className="w-full md:w-2/3 text-center md:text-left md:pl-8">
						<p className="text-gray-700 leading-7">
							Hi, I'm [Your Name], a passionate web developer specializing in
							the MERN stack. I love building responsive, user-friendly websites
							and applications that solve real-world problems. With a strong
							focus on clean code and scalable architecture, I strive to create
							solutions that are both efficient and elegant.
						</p>
						<p className="mt-4 text-gray-700 leading-7">
							When I'm not coding, you can find me exploring new technologies,
							contributing to open source projects, or reading about design
							patterns and best practices.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
