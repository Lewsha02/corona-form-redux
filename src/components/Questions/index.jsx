import React from "react";
import { useFela } from "react-fela";

import { Container, Row, Col } from "react-bootstrap";

import { Answers } from "./Accordion";

import bitmapJpg from "../../assets/Bitmap.jpg";

export const Questions = () => {
	const { css } = useFela();

	return (
		<section className={css(qSection)}>
			<Container>
				<Row>
					<Col lg={8}>
						<Answers />
					</Col>
					<Col lg={4}>
						<div className={css(imgWrapper)}>
							<div className={css(textWrapper)}>
								<h3>Защити своего ребенка!</h3>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

const qSection = () => ({
	padding: "40px 0",
	backgroundColor: "#EDEDED",
});

const imgWrapper = () => ({
	width: "100%",
	minHeight: "350px",
	backgroundImage: `url(${bitmapJpg})`,
	backgroundPosition: "center",
	backgroundSize: "cover",
	padding: "30px",
	"@media screen and (max-width: 992px)": {
		maxWidth: '350px',
		margin: '20px auto 0 auto'
	}
});

const textWrapper = () => ({
	border: "14px solid #CBE803",
	height: "300px",
	maxHeight: "100%",
	position: "relative",
	"> h3": {
		fontSize: "32px",
		fontFamily: "Roboto, sans-serif",
		fontWeight: "500",
		color: "#F0F7F9",
		textTransform: "uppercase",
		position: "absolute",
		bottom: "25px",
		left: "25px",
	},
});
