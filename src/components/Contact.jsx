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
		<section id="contact" className="bg-gray-100 py-12 px-6">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
					Contact Me
				</h2>
				<form
					onSubmit={handleSubmit}
					className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
				>
					<div className="mb-4">
						<label
							htmlFor="name"
							className="block text-gray-700 font-medium mb-2"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className={`w-full px-4 py-2 border ${
								formErrors.name ? "border-red-500" : "border-gray-300"
							} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
						/>
						{formErrors.name && (
							<p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
						)}
					</div>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-gray-700 font-medium mb-2"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className={`w-full px-4 py-2 border ${
								formErrors.email ? "border-red-500" : "border-gray-300"
							} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
						/>
						{formErrors.email && (
							<p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
						)}
					</div>
					<div className="mb-4">
						<label
							htmlFor="message"
							className="block text-gray-700 font-medium mb-2"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							className={`w-full px-4 py-2 border ${
								formErrors.message ? "border-red-500" : "border-gray-300"
							} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
							rows="5"
						></textarea>
						{formErrors.message && (
							<p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
						)}
					</div>
					<button
						type="submit"
						className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
