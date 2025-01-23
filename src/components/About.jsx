import React from "react";
import details from "../data/details.json";

const About = () => {
	return (
		<section id="about">
			<div>
				<h2>About Me</h2>
				<div>
					{/* Image Section */}
					<div>
						<img src="/src/assets/images/profile.jpg" alt="About me" />
					</div>
					{/* Text Section */}
					<div>
						<p>
							Hi, I'm {details.personal.name}, a passionate web developer specializing in
							the MERN stack. I love building responsive, user-friendly websites
							and applications that solve real-world problems. With a strong
							focus on clean code and scalable architecture, I strive to create
							solutions that are both efficient and elegant.
						</p>
						<p>
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
