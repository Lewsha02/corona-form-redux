import React from "react";

import { Header } from "./components/Header";
import { PolicyForm } from "./components/PolicyForm";
import { Advantages } from "./components/Advantages";
import { Rules } from "./components/Rules";
import { Questions } from "./components/Questions";
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap-grid.min.css";

export const App = () => {
	return (
		<>
			<Header />
			<Advantages />
			<Rules />
			<Questions />
			<PolicyForm />
			<Footer />
		</>
	);
};
