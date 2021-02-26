import React from "react";
import { useFela } from "react-fela";

import { Container, Row, Col } from "react-bootstrap";

import fbSvg from "../../assets/facebook.svg";
import vkSvg from "../../assets/vk.svg";
import applePay from "../../assets/applePay.png";
import msCard from "../../assets/mscard.png";
import visa from "../../assets/visa.png";
import mir from "../../assets/mir.png";

export const FooterBottom = () => {
	const { css } = useFela();

	return (
		<div className={css(footerBottom)}>
			<Container>
				<Row className="align-items-center">
					<Col lg={4}>
						<div className={css(social)}>
							<a href='https://www.facebook.com/groups/1016638088385886/' className={css(socialIcon)}>
								<img src={fbSvg} alt='facebook icon' />
							</a>
							<a href='https://vk.com/konti.travel' className={css(socialIcon)}>
								<img src={vkSvg} alt='vk icon' />
							</a>
							<div className='text'>Мы в социальных сетяц</div>
						</div>
					</Col>
					<Col lg={4}>
						Техническое решение и поддержка: ООО «Континент», ИНН 7825391069,
						<a href='tel:+78127026235'>+7 812 702 62 35</a>,
						law@kontinent-lobby.ru, 191014, пер. Басков 3, Санкт-Петербург
					</Col>
					<Col lg={4}>
						<div className={css(pay)}>
							<img src={applePay} alt='apple pay icon' />
							<img src={msCard} alt='master card icon' />
							<img src={visa} alt='visa card icon' />
							<img src={mir} alt='mir card icon' />
							<p>
								Передача данных осуществляется с соблюдением всех необходимых
								мер безопасности
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

const footerBottom = () => ({
	padding: "9px 0",
	backgroundColor: "#022837",
	fontSize: "11px",
	color: "#b3bbb9",
	fontWeight: "300",
	fontFamily: "Roboto, sans-serif",
	lineHeight: "16.4px",
	marginTop: "35px",
});

const social = () => ({
	display: "flex",
	alignItems: "center",
	"@media screen and (max-width: 992px)": {
		marginBottom: '20px'
	}
});

const socialIcon = () => ({
	display: "inline-block",
	padding: "0 10px",
	cursor: "pointer",
	"> img": {
		width: "28px",
	},
});

const pay = () => ({
	display: "flex",
	alignItems: "center",
	textAlign: 'right',
	"> img": {
		margin: '0 5px',
		maxWidth: '55px'
	},
	"> p": {
		margin: 0
	},
	"@media screen and (max-width: 992px)": {
		marginTop: '20px',
	},
	"@media screen and (max-width: 480px)": {
		flexWrap: 'wrap'
	}
});
