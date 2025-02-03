import React from "react";
import details from "../../data/details.json";

const About: React.FC = () => {
	return (
		<section id="about" className="py-16 bg-gray-100">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
					About Me
				</h2>

				<div className="flex flex-col md:flex-row items-center justify-center gap-12">
					{/* Image Section */}
					<div className="w-64 h-64">
						<img
							src="/src/assets/images/profile.jpg"
							alt="About me"
							className="w-full h-full object-cover rounded-xl shadow-lg"
						/>
					</div>

					{/* Text Section */}
					<div className="max-w-2xl text-center md:text-left">
						<p className="text-lg text-gray-700 leading-relaxed">
							Hi, I'm{" "}
							<span className="font-semibold">{details.personal.name}</span>, a
							passionate web developer specializing in the MERN stack. I love
							building responsive, user-friendly websites and applications that
							solve real-world problems. With a strong focus on clean code and
							scalable architecture, I strive to create solutions that are both
							efficient and elegant.
						</p>
						<p className="text-lg text-gray-700 leading-relaxed mt-4">
							When I'm not coding, you can find me exploring new technologies,
							contributing to open-source projects, or reading about design
							patterns and best practices.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
