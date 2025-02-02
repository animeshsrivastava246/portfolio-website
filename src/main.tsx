import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
	createRoot(rootElement).render(
		<HelmetProvider>
			<App />
		</HelmetProvider>
	);
} else {
	console.error("Root element not found");
}
