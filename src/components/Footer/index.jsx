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
								<a href='https://konti.travel/about/'>О сервисе</a>
							</li>
							<li>
								<img src={footerMapSvg} alt='map icon' />
								<a href='https://konti.travel/contacts/'>Контакты</a>
							</li>
							<li>
								<img src={footerPartnersSvg} alt='partners icon' />
								<a href='https://konti.travel/partners/'>Партнерам</a>
							</li>
						</ul>
					</Col>
					<Col md={4}>
						<div className={css(footerMenu)}>
							<h5><a href="https://konti.travel/help/">Помощь</a></h5>
							<ul>
								<li>
									<a href='https://konti.travel/help/specialnye-predlozheniya/'>Специальные предложения</a>
								</li>
								<li>
									<a href='https://konti.travel/help/rules/'>Условия страхования</a>
								</li>
								<li>
									<a href='https://konti.travel/help/spravochnaya-informaciya-o-turisticheskoj-strahovk/'>Антирейтинг</a>
								</li>
								<li>
									<a href='https://konti.travel/help/politika-konfidencialnosti/'>Политика конфиденциальности</a>
								</li>
								<li>
									<a href='https://konti.travel/help/sample/'>Образцы полисов</a>
								</li>
								<li>
									<a href='https://konti.travel/help/kak-oformit-strahovoj-polis/'>Как оформить страховой полис?</a>
								</li>
							</ul>
						</div>
					</Col>
					<Col md={4}>
						<div className={css(footerMenu)}>
							<h5 className="menuServices"><a href="https://konti.travel/services/">Услуги</a></h5>
							<ul>
								<li>
									<a href='https://konti.travel/services/turisticheskie-mesta/'>Туристические места</a>
								</li>
								<li>
									<a href='https://konti.travel/services/poleznaya-informaciya-dlya-turistov/'>Полезная информация для туристов</a>
								</li>
								<li>
									<a href='https://konti.travel/services/vidy-strahovaniya/'>Виды страхования</a>
								</li>
								<li>
									<a href='https://konti.travel/services/strahovki-dlya-turistov-po-stranam/'>Страховки для туристов по странам</a>
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
		"> a": {
			color: '#fff',
			textDecoration: 'none'
		},
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

