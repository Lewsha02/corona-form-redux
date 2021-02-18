import React from "react";
import { useFela } from "react-fela";

import { Container, Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap-grid.min.css";
import { section, h2 } from "./styles";

import { PolicyForm } from "./components/PolicyForm";

export const App = () => {
	const { css } = useFela();

	return (
		<section className={css(section)}>
			<Container>
				<PolicyForm />
			</Container>
		</section>
	);
};
