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
			// Add form data to Firestore
			await addDoc(collection(db, "contacts"), {
				...formData,
				timestamp: Timestamp.now(), // Add the current timestamp
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
							required
						/>
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							rows="5"
							required
						></textarea>
					</div>
					{successMessage && <p>{successMessage}</p>}
					{errorMessage && <p>{errorMessage}</p>}
					<button type="submit" disabled={isSubmitting}>
						{isSubmitting ? "Sending..." : "Send Message"}
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
