import React from "react";
import { useFela } from "react-fela";

import { Container, Row, Col } from "react-bootstrap";

import { FooterBottom } from './FooterBottom';

import footerInfoSvg from "../../assets/footer-info.svg";
import footerMapSvg from "../../assets/footer-map.svg";
import footerPartnersSvg from "../../assets/footer-partners.svg";
import footerQuestionSvg from "../../assets/footer-question.svg";
import footerServicesSvg from "../../assets/footer-services.svg";

export const Footer = () => {
	const { css } = useFela();

	return (
		<footer className={css(footer)}>
			<Container>
				<Row>
					<Col md={4}>
						<ul className={css(faq)}>
							<li>
								<img src={footerInfoSvg} alt='info icon' />
								<a href='/'>О сервисе</a>
							</li>
							<li>
								<img src={footerMapSvg} alt='map icon' />
								<a href='/'>Контакты</a>
							</li>
							<li>
								<img src={footerPartnersSvg} alt='partners icon' />
								<a href='/'>Партнерам</a>
							</li>
						</ul>
					</Col>
					<Col md={4}>
						<div className={css(footerMenu)}>
							<h5>Помощь</h5>
							<ul>
								<li>
									<a href='/'>Специальные предложения</a>
								</li>
								<li>
									<a href='/'>Условия страхования</a>
								</li>
								<li>
									<a href='/'>Антирейтинг</a>
								</li>
								<li>
									<a href='/'>Политика конфиденциальности</a>
								</li>
								<li>
									<a href='/'>Образцы полисов</a>
								</li>
								<li>
									<a href='/'>Как оформить страховой полис?</a>
								</li>
							</ul>
						</div>
					</Col>
					<Col md={4}>
						<div className={css(footerMenu)}>
							<h5 className="menuServices">Услуги</h5>
							<ul>
								<li>
									<a href='/'>Туристические места</a>
								</li>
								<li>
									<a href='/'>Полезная информация для туристов</a>
								</li>
								<li>
									<a href='/'>Виды страхования</a>
								</li>
								<li>
									<a href='/'>Страховки для туристов по странам</a>
								</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
			<FooterBottom />
		</footer>
	);
};

const footer = () => ({
	backgroundColor: "#003c50",
	paddingTop: "35px",
});

const faq = () => ({
	listStyleType: "none",
	margin: "0",
	padding: "0",
	"> li": {
		marginBottom: "15px",
		"> img": {
			width: "16px",
			marginRight: "15px",
		},
		"> a": {
			fontSize: "16px",
			color: "#fff",
			textDecoration: "none",
			verticalAlign: "middle",
			fontWeight: "bold",
		},
	},
});

const footerMenu = () => ({
	"> h5": {
		fontSize: "16px",
		color: "#fff",
		fontWeight: "bold",
		marginBottom: '15px',
		position: 'relative',
		":before": {
			content: '""',
			width: '16px',
			height: '16px',
			position: 'absolute',
			top: '50%',
			transform: 'translateY(-50%)',
			left: '-30px',
			backgroundImage: `url(${footerQuestionSvg})`
		}
	},
	"> .menuServices": {
		":before": {
			backgroundImage: `url(${footerServicesSvg})`
		}
	},
	"> ul": {
		listStyleType: "none",
		margin: "0",
		padding: "0",
		"> li": {
			"> a": {
				padding: "5px 0",
				color: "#b3bbb9",
				textDecoration: "none",
				lineHeight: "25px",
				fontSize: "12px",
				fontWeight: "400",
				"@media screen and (max-width: 991px)": {
					paddingLeft: '0'
				}
			},
		},
	},
	"@media screen and (max-width: 768px)": {
		marginTop: '40px',
		marginLeft: '30px'
	}
});

