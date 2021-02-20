import React from "react";
import { useFela } from "react-fela";

import { Container, Row, Col } from "react-bootstrap";
import { accentColor } from "../../styles";

import tips1Svg from '../../assets/tips-1.svg'
import tips2Svg from '../../assets/tips-2.svg'
import tips3Svg from '../../assets/tips-3.svg'

export const Advantages = () => {
	const { css } = useFela();

	return (
		<section className={css(advSection)}>
			<Container>
				<Row className='align-items-center'>
					<Col lg={4} md={6}>
						<div className={css(advItem)}>
							<div className={css(advIcon)}>
								<img src={tips1Svg} alt="tips 1 Icon"/>
							</div>
							<div className={css(advText)}>
								Самые выгодные условия страхования
							</div>
						</div>
					</Col>
					<Col lg={4} md={6}>
						<div className={css(advItem)}>
							<div className={css(advIcon)}>
								<img src={tips2Svg} alt="tips 2 Icon"/>
							</div>
							<div className={css(advText)}>
								Защита 24 часа в сутки
							</div>
						</div>
					</Col>
					<Col lg={{span: 4, offset: 0}} md={{span: 6, offset: 3}}>
					<div className={css(advItem)}>
							<div className={css(advIcon)}>
								<img src={tips3Svg} alt="tips 3 Icon"/>
							</div>
							<div className={css(advText)}>
								Онлайн оформление за 3 минуты. <br/> Полис придет на email
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

const advSection = () => ({
	backgroundColor: accentColor,
	padding: "50px 0",
	"@media screen and (max-width: 992px)": {
		paddingBottom: '25px'
	}
});

const advItem = () => ({
	display: "flex",
	alignItems: "center",
	"@media screen and (max-width: 992px)": {
		marginBottom: '25px'
	}
});

const advIcon = () => ({
	width: "64px",
	textAlign: 'center',
	"> img": {
		margin: '0 auto',
		maxWidth: '100%'
	},
	"@media screen and (max-width: 480px)": {
		maxWidth: '40px',
	}
});

const advText = () => ({
	fontSize: "24px",
	fontWeight: "700",
	color: "#F0F7F9",
	marginLeft: "30px",
	fontFamily: 'Roboto, sans-serif',
	"@media screen and (max-width: 480px)": {
		fontSize: '18px'
	}
});
