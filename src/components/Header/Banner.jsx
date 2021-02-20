import React from "react";
import { useFela } from "react-fela";

import { Row, Col } from "react-bootstrap";
import { h2, accentColor, button } from "../../styles";

import arrowSvg from "../../assets/right-arrow.svg";
import respSvg from "../../assets/coronavirus.svg";

export const Banner = () => {
	const { css } = useFela();

	return (
		<Row>
			<Col xl={9} lg={12}>
				<div className={css(banner)}>
					<Row>
						<Col lg={7} md={6}>
							<div className={css(bannerLeft)}>
								<h2 className={css(h2)}>Защита ребенка!</h2>
								<p>
									Страховка от <span>COVID-19</span> <br /> и несчастного случая
									онлайн.
								</p>
							</div>
							<Row className='align-items-center'>
								<Col lg={6}>
									<div className={css(policyConditions)}>
										<div>1 месяц</div>
										<p>Срок страхования</p>
									</div>
								</Col>
								<Col lg={6}>
									<div className={css(policyConditions)}>
										<div>1 застрахованный</div>
										<p>от 5 до 18 лет</p>
									</div>
								</Col>
								<Col lg={7}>
									<div className={css(policyPrice)}>
										Стоимость полиса:
										<span className={css(button)}>130 ₽</span>
									</div>
								</Col>
								<Col lg={5}>
									<a className={css(bannerButton)}>Купить</a>
								</Col>
							</Row>
						</Col>
						<Col lg={5} md={6}>
							<div className={css(bannerRight)}>
								<h5>Ответственность:</h5>
								<ul className={css(respList)}>
									<li>
										<div className='respIcon'>
											<img src={respSvg} alt='corona Icon' />
										</div>
										<div className='respText'>
											Инфицирование
											<span className={css(covid)}>COVID-19</span>:
											<b>10 000 <i className={css(toRight)}>₽</i></b>
										</div>
									</li>
									<li>
										<div className='respIcon'>
											<img src={respSvg} alt='corona Icon' />
										</div>
										<div className='respText'>
											Стационар
											<span className={css(covid)}>COVID-19</span>:
											<b>
												28 000 <i className={css(toRight)}>₽</i> <span>( макс. выплата )</span>
											</b>
										</div>
									</li>
									<li>
										<div className='respIcon'>
											<img src={respSvg} alt='corona Icon' />
										</div>
										<div className='respText'>
											<span className={css(covid)}>COVID-19</span>:
											<b>
												500 000 <i>₽</i> <span>( макс. выплата )</span>
											</b>
										</div>
									</li>
									<li>
										<div className='respIcon'>
											<img src={respSvg} alt='corona Icon' />
										</div>
										<div className='respText'>
											Несчастный случай
											<b>
												100 000 <i>₽</i> <span>( макс. выплата )</span>
											</b>
										</div>
									</li>
								</ul>
							</div>
						</Col>
					</Row>
				</div>
			</Col>
		</Row>
	);
};

const banner = () => ({
	padding: "35px",
	marginTop: "50px",
	border: "25px solid #CCEA00",
	marginBottom: "20px",
	"@media screen and (max-width: 480px)": {
		padding: "15px",
		borderWidth: "10px",
	},
});

const bannerLeft = () => ({
	"> h2": {
		color: "#F0F7F9",
		fontWeight: "500",
	},
	"> p": {
		color: "#F0F7F9",
		marginTop: "10px",
		fontSize: "19px",
		fontFamily: "Roboto, sans-serif",
		fontWeight: "300",
		"> span": {
			color: accentColor,
			fontWeight: "bold",
		},
	},
});

const bannerRight = () => ({
	"> h5": {
		fontSize: "19px",
		fontFamily: "Roboto, sans-serif",
		fontWeight: "500",
		color: "#F0F7F9",
		marginBottom: "10px",
	},
});

const respList = () => ({
	margin: "0",
	padding: "0",
	fontFamily: "Roboto, sans-serif",
	"> li": {
		display: "flex",
		marginTop: "15px",
		"> .respIcon": {
			width: "36px",
			height: "36px",
			marginRight: "20px",
			"@media screen and (max-width: 480px)": {
				width: "30px",
				height: "30px",
			},
		},
		"> .respText": {
			color: "#F0F7F9",
			fontFamily: 'Roboto, sans-serif',
			"@media screen and (max-width: 480px)": {
				fontSize: "14px",
			},
			"> span": {
				marginLeft: "3px",
				fontFamily: 'Roboto, sans-serif',
			},
			"> b": {
				display: "block",
				marginTop: "5px",
				paddingLeft: "5px",
				position: 'relative',
				"> span": {
					color: "#F0F7F9",
					fontSize: "12px",
					fontWeight: "300",
					marginLeft: '25px'
				},
				"> i": {
					fontStyle: 'normal',
				},
				"@media screen and (max-width: 480px)": {
					paddingLeft: '0'
				}
			},
		},
	},
});

const toRight = () => ({
	marginLeft: '10px'
});

const covid = () => ({
	color: accentColor,
	fontWeight: "500",
	fontFamily: "Roboto, sans-serif",
});

const policyConditions = () => ({
	marginTop: "20px",
	"> div": {
		fontSize: "16px",
		fontFamily: "Roboto, sans-serif",
		fontWeight: "500",
		padding: "10px 30px",
		paddingLeft: "10px",
		color: "#F0F7F9",
		borderRadius: "10px",
		borderBottom: `1px solid ${accentColor}`,
	},
	"> p": {
		fontSize: "14px",
		fontFamily: "Roboto, sans-serif",
		color: "#c2c2c2",
		marginTop: "10px",
		paddingLeft: "10px",
	},
});

const policyPrice = () => ({
	marginTop: "30px",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	color: "#F0F7F9",
	fontSize: "14px",
	fontFamily: "Roboto, sans-serif",
	"> span": {
		maxWidth: "110px",
		padding: "10px 35px",
		fontWeight: "bold",
		fontSize: "14px",
		marginLeft: "20px",
	},
});

const bannerButton = () => ({
	position: "relative",
	fontSize: "14px",
	marginTop: "30px",
	padding: "10px 30px",
	display: "block",
	color: "#fff",
	letterSpacing: "2px",
	fontFamily: "Roboto, sans-serif",
	borderTop: `4px solid ${accentColor}`,
	borderBottom: `4px solid ${accentColor}`,
	textAlign: "center",
	textTransform: "uppercase",
	":hover": {
		color: '#fff',
		textDecoration: 'none'
	},
	":before": {
		content: '""',
		position: "absolute",
		width: "43px",
		height: "48px",
		backgroundImage: `url(${arrowSvg})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "right center",
		backgroundSize: "cover",
		right: "-32px",
		top: "50%",
		transform: "translateY(-50%)",
	},
	":after": {
		content: '""',
		position: "absolute",
		width: "43px",
		height: "48px",
		backgroundImage: `url(${arrowSvg})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "right center",
		backgroundSize: "cover",
		left: "-4.5px",
		top: "50%",
		transform: "translateY(-50%)",
	},
	"@media screen and (max-width: 992px)": {
		maxWidth: "150px",
		margin: "25px auto 0 auto",
	},
	"@media screen and (max-width: 768px)": {
		marginBottom: "25px !important",
	},
});
