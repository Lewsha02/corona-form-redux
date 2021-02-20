import React from "react";
import { useFela } from "react-fela";

import { Accordion, Card } from "react-bootstrap";

import { accentColor } from "../../styles";

import "bootstrap/dist/css/bootstrap.min.css";

export const Answers = () => {
	const { css } = useFela();

	return (
		<div className={css(answers)}>
			<h4>Часто задаваемые вопросы</h4>
			<Accordion defaultActiveKey='0' className={css(accordion)}>
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey='0'>
						Что делать, если я приобрел полис, и у моего ребенка был
						диагностирован COVID-19?
					</Accordion.Toggle>
					<Accordion.Collapse eventKey='0'>
						<Card.Body>
							Далеко-далеко за словесными горами в стране гласных и согласных
							живут рыбные тексты. На берегу себя ipsum которой заманивший речью
							возвращайся свой подпоясал предложения?
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey='1'>
						Какой возраст может быть у застрахованного лица?
					</Accordion.Toggle>
					<Accordion.Collapse eventKey='1'>
						<Card.Body>
							Далеко-далеко за словесными горами в стране гласных и согласных
							живут рыбные тексты. На берегу себя ipsum которой заманивший речью
							возвращайся свой подпоясал предложения? Далеко-далеко за
							словесными горами в стране.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey='2'>
						Какие случаи являются страховыми?
					</Accordion.Toggle>
					<Accordion.Collapse eventKey='2'>
						<Card.Body>
							Далеко-далеко за словесными горами в стране гласных и согласных
							живут рыбные тексты. На берегу себя ipsum которой заманивший речью
							возвращайся свой подпоясал предложения? Далеко-далеко, за
							словесными горами в стране гласных и согласных живут рыбные
							тексты.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey='3'>
						Какой период действия полиса?
					</Accordion.Toggle>
					<Accordion.Collapse eventKey='3'>
						<Card.Body>
							Далеко-далеко за словесными горами в стране гласных и согласных
							живут рыбные тексты. На берегу себя ipsum которой заманивший речью
							возвращайся свой подпоясал предложения? Далеко-далеко, за
							словесными горами в стране гласных и согласных живут рыбные
							Далеко-далеко, за. тексты.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey='4'>
						Могу ли я купить полис для другого человека?
					</Accordion.Toggle>
					<Accordion.Collapse eventKey='4'>
						<Card.Body>
							Далеко-далеко за словесными горами в стране гласных и согласных
							живут рыбные тексты. На берегу себя ipsum которой заманивший речью
							возвращайся свой подпоясал предложения?
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
	);
};

const answers = () => ({
	"> h4": {
		fontSize: "30px",
		color: "#174051",
		fontFamily: "Roboto, sans-serif",
		fontWeight: "700",
	},
});

const accordion = () => ({
	marginTop: "35px",
	"> .card": {
		marginTop: "15px",
		fontSizi: "14px",
		fontWeight: "400",
		border: "none",
		borderBottom: "1px solid #707070 !important",
		backgroundColor: "#EDEDED",
		borderRadius: "0",
		"> .card-header": {
			color: "#0568CA",
			backgroundColor: "#EDEDED",
			border: "none",
			fontSize: "18px",
			fontFamily: "Roboto, sans-serif",
			fontWeight: "bold",
			paddingRight: "100px",
			position: "relative",
			":before": {
				content: '""',
				position: "absolute",
				right: "20px",
				top: "50%",
				transform: "translateY(-50%)",
				width: "0",
				height: "0",
				borderLeft: "5px solid transparent",
				borderRight: "5px solid transparent",
				borderTop: `5px solid ${accentColor}`,
			},
		},
		"> .collapse": {
			backgroundColor: "#EDEDED",
			color: "#333",
		},
	},
});
