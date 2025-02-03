import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import { db } from "../../utils/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Captcha from "../common/Captcha";

interface FormData {
	name: string;
	email: string;
	message: string;
}

const Contact: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [successMessage, setSuccessMessage] = useState<string>("");
	const [errorMessage, setErrorMessage] = useState<string>("");
	const [captchaToken, setCaptchaToken] = useState<string | null>(null);
	const captchaRef = useRef<{ reset: () => void }>(null);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (!captchaToken) {
			setErrorMessage("Please complete the CAPTCHA verification.");
			return;
		}

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
			captchaRef.current?.reset(); // Reset CAPTCHA after successful submission
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
							rows={5}
							required
							className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
						></textarea>
					</div>

					{/* Modular Captcha Component */}
					<Captcha ref={captchaRef} onVerify={setCaptchaToken} />

					{successMessage && (
						<p className="text-green-600 text-sm">{successMessage}</p>
					)}
					{errorMessage && (
						<p className="text-red-600 text-sm">{errorMessage}</p>
					)}

					<button
						type="submit"
						disabled={isSubmitting || !captchaToken}
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
