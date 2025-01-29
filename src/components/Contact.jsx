import React, { useState } from "react";
import { db } from "../utils/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

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
			await addDoc(collection(db, "contacts"), {
				...formData,
				timestamp: Timestamp.now(),
			});
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
		<section id="contact" className="py-16 bg-gray-100">
			<div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
				<h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
					Contact Me
				</h2>

				<form onSubmit={handleSubmit} className="space-y-6">
					{/* Name Input */}
					<div>
						<label htmlFor="name" className="block text-gray-700 font-medium">
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					</div>

					{/* Email Input */}
					<div>
						<label htmlFor="email" className="block text-gray-700 font-medium">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
					</div>

					{/* Message Input */}
					<div>
						<label
							htmlFor="message"
							className="block text-gray-700 font-medium"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							rows="5"
							required
							className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
						></textarea>
					</div>

					{/* Success & Error Messages */}
					{successMessage && (
						<p className="text-green-600 text-sm">{successMessage}</p>
					)}
					{errorMessage && (
						<p className="text-red-600 text-sm">{errorMessage}</p>
					)}

					{/* Submit Button */}
					<button
						type="submit"
						disabled={isSubmitting}
						className="w-full py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition"
					>
						{isSubmitting ? "Sending..." : "Send Message"}
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
