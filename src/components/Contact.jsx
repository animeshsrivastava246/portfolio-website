import React, { useState } from "react";
import { db } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSuccessMessage("");
		setErrorMessage("");

		try {
			// Add form data to Firestore
			await addDoc(collection(db, "contacts"), formData);
			setSuccessMessage("Message sent successfully!");
			setFormData({ name: "", email: "", message: "" });
		} catch (error) {
			setErrorMessage("Failed to send message. Please try again.");
			console.error(error);
		} finally {
			setIsSubmitting(false);
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
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
						/>
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
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
						/>
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
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							rows="5"
							required
						></textarea>
					</div>
					{successMessage && (
						<p className="text-green-500 mb-4">{successMessage}</p>
					)}
					{errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
					<button
						type="submit"
						className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
						disabled={isSubmitting}
					>
						{isSubmitting ? "Sending..." : "Send Message"}
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
