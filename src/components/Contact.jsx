import React, { useState } from "react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [formErrors, setFormErrors] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });

		// Reset errors when user types
		setFormErrors({ ...formErrors, [name]: "" });
	};

	const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

	const handleSubmit = (e) => {
		e.preventDefault();
		const errors = {};

		// Form validation
		if (!formData.name) errors.name = "Name is required.";
		if (!formData.email) {
			errors.email = "Email is required.";
		} else if (!validateEmail(formData.email)) {
			errors.email = "Invalid email format.";
		}
		if (!formData.message) errors.message = "Message is required.";

		setFormErrors(errors);

		// If no errors, submit the form
		if (Object.keys(errors).length === 0) {
			console.log("Form submitted:", formData);
			alert("Your message has been sent!");
			setFormData({ name: "", email: "", message: "" });
		}
	};

	return (
		<section id="contact">
			<div>
				<h2>Contact Me</h2>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
						/>
						{formErrors.name && <p>{formErrors.name}</p>}
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
						/>
						{formErrors.email && <p>{formErrors.email}</p>}
					</div>
					<div>
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							rows="5"
						></textarea>
						{formErrors.message && <p>{formErrors.message}</p>}
					</div>
					<button type="submit">Send Message</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
