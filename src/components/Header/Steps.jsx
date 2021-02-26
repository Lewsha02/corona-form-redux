import React from "react";
import { useFela } from "react-fela";

import { Row, Col } from "react-bootstrap";

import pdfIcon from "../../assets/pdf.png";
import { accentColor } from "../../styles";

export const Steps = () => {
	const { css } = useFela();

	return (
		<Row>
			<Col lg={9} md={12}>
				<Row className="align-items-center">
					<Col lg={2} md={2} sm={3}>
						<div className={css(steps)}>Страховка в 3 клика:</div>
					</Col>
					<Col lg={2} md={2} sm={3}>
						<div className={css(step)}>
							<span>1</span>
							<p>Заполните данные</p>
						</div>
					</Col>
					<Col lg={2} md={2} sm={3}>
						<div className={css(step)}>
							<span>2</span>
							<p>Оплатите онлайн</p>
						</div>
					</Col>
					<Col lg={2} md={2} sm={3}>
						<div className={css(step)}>
							<span>3</span>
							<p>Получите полис</p>
						</div>
					</Col>
					<Col lg={4} md={4} sm={12}>
						<div className={css(docs)}>
							<ul>
								<li>
									<img src={pdfIcon} alt='pdfIcon' />
									<a href='https://konti.travel/help/sample/'>Образцы полисов</a>
								</li>
								<li>
									<img src={pdfIcon} alt='pdfIcon' />
									<a href='https://konti.travel/help/rules/'>Образцы полисов</a>
								</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

const steps = () => ({
	color: "#b3bbb9",
	fontSize: "17px",
	fontWeight: "bold",
	fontFamily: 'Roboto, sans-serif',
	"@media screen and (max-width: 768px)": {
		marginBottom: '15px'
	},
	"@media screen and (max-width: 576px)": {
		marginTop: '20px'
	}
});

const step = () => ({
	display: "flex",
	alignItems: "center",
	fontSize: "16px",
	fontWeight: "400",
	position: "relative",
	color: "#b3bbb9",
	fontFamily: 'Roboto, sans-serif',
	"> span": {
		color: accentColor,
		fontSize: "25px",
		marginRight: "15px",
	},
	"> p": {
		margin: '0',
	},
	":before": {
		content: '""',
		width: "3px",
		height: "50px",
		position: "absolute",
		backgroundColor: "#022837",
		left: "-15px",
		top: "50%",
		transform: "translateY(-50%) rotate(30deg)",
	},
	"@media screen and (max-width: 768px)": {
		marginBottom: '15px',
	},
	"@media screen and (max-width: 576px)": {
		":before": {
			display: 'none'
		}
	},
});

const docs = () => ({
	"> ul": {
		listStyleType: 'none',
		"> li": {
			"> a": {
				color: '#b3bbb9',
				verticalAlign: 'top',
				fontFamily: 'Roboto, sans-serif',
				marginLeft: '8px'
			},
			"@media screen and (max-width: 480px)": {
				marginBottom: '8px'
			},
		}
	}
});