import React from "react";
import { useFela } from "react-fela";

import { Container, Row, Col } from "react-bootstrap";
import paySvg from "../../assets/pay.svg";
import virusSvg from "../../assets/virus.svg";
import planetEarthSvg from "../../assets/planet-earth.svg";
import calendarSvg from "../../assets/calendar.svg";
import injurySvg from "../../assets/injury.svg";
import yearSvg from "../../assets/year.svg";

export const Rules = () => {
	const { css } = useFela();

	return (
		<section className={css(rulesSection)}>
			<Container>
				<Row>
					<Col lg={4} md={6}>
						<div className={css(rule)}>
							<div className={css(ruleIcon)}>
								<img src={paySvg} alt='pay icon' />
							</div>
							<h4>600 000 руб</h4>
							<p>Максимальная выплата</p>
						</div>
					</Col>
					<Col lg={4} md={6}>
						<div className={css(rule)}>
							<div className={css(ruleIcon)}>
								<img src={virusSvg} alt='virus icon' />
							</div>
							<h4>COVID-19</h4>
							<p>Страховой случай - подтвержденное вирусное заболевание COVID-19</p>
						</div>
					</Col>
					<Col lg={4} md={6}>
						<div className={css(rule)}>
							<div className={css(ruleIcon)}>
								<img src={planetEarthSvg} alt='planet icon' />
							</div>
							<h4>Весь мир</h4>
							<p>Территория действия страховки</p>
						</div>
					</Col>
					<Col lg={4} md={6}>
						<div className={css(rule)}>
							<div className={css(ruleIcon)}>
								<img src={calendarSvg} alt='calendar icon' />
							</div>
							<h4>15-й день после <br/> оформления полиса</h4>
							<p>Начало страхового периода</p>
						</div>
					</Col>
					<Col lg={4} md={6}>
						<div className={css(rule)}>
							<div className={css(ruleIcon)}>
								<img src={injurySvg} alt='injury icon' />
							</div>
							<h4>Несчастный <br/> случай</h4>
							<p>Страховой случай – любые химико-механические повреждения</p>
						</div>
					</Col>
					<Col lg={4} md={6}>
						<div className={css(rule)}>
							<div className={css(ruleIcon)}>
								<img src={yearSvg} alt='year icon' />
							</div>
							<h4>От 1 месяца <br/> до 1 года</h4>
							<p>Срок действия страхового полиса</p>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

const rulesSection = () => ({
	padding: "20px 0",
});

const rule = () => ({
	textAlign: "center",
	color: "#003C50",
	marginTop: '60px',
	"> h4": {
		fontSize: "32px",
		fontWeight: "bold",
		marginTop: "40px",
		fontFamily: "Roboto, sans-serif",
		"@media screen and (max-width: 768px)": {
			marginTop: "20px",
		},
	},
	"> p": {
		fontSize: "24px",
		fontWeight: "300",
		marginTop: "20px",
		fontFamily: "Roboto, sans-serif",
	},
});

const ruleIcon = () => ({
	margin: "0 auto",
	"> img": {
		maxWidth: "100%",
	},
});
