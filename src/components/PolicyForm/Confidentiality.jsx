import React from "react";
import { useFela } from "react-fela";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { confCheck } from "../../redux/actions/formError";

import { accentColor } from "../../styles";

export const Confidentiality = React.memo(() => {
	const { css } = useFela();
	const dispatch = useDispatch();

	function handleChangeInput({ target }) {
		dispatch(confCheck(target.checked));
	}

	return (
		<Col lg={9} md={12}>
			<div className={css(conf)}>
				<div className='conf-check'>
					<input
						name='conf-checkbox'
						id='cbx'
						type='checkbox'
						required
						onChange={handleChangeInput}
					/>
					<label className={css(cbx)} htmlFor='cbx'>
						<span>
							<svg width='12px' height='10px' viewBox='0 0 12 10'>
								<polyline points='1.5 6 4.5 9 10.5 1'></polyline>
							</svg>
						</span>
					</label>
				</div>
				<label htmlFor='cbx'>
					<p className='conf-text'>
						Нажимая кнопку "Отправить", я даю свое согласие на обработку моих
						персональных данных и соглашаетесь с политикой конфиденциальности, в
						соответствии с Федеральным законом от 27.07.2006 года №152-Ф3 "О
						персональных данных", на условиях и для целей, определенных в
						Согласии на обработку персональных данных
					</p>
				</label>
			</div>
		</Col>
	);
});

const conf = () => ({
	marginTop: "50px",
	display: "flex",
	marginBottom: "50px",
	"> .conf-check": {
		flexBasis: "15%",
		"@media screen and (max-width: 992px)": {
			flexBasis: "25%",
		},
		"@media screen and (max-width: 768px)": {
			flexBasis: "40%",
		},
		"@media screen and (max-width: 480px)": {
			flexBasis: "90% !important",
		},
		"> input": {
			display: "none",
			":checked + label > span:first-child": {
				background: accentColor,
				borderColor: accentColor,
				"> svg": {
					strokeDashoffset: 0,
				},
			},
		},
	},
	"> .conf-text": {
		fontSize: "14px",
		margin: 0,
		color: "#757575",
		fontFamily: "Roboto, sans-serif",
		fontWeight: "300",
		"@media screen and (max-width: 480px)": {
			fontSize: "12px",
		},
	},
});

const cbx = () => ({
	margin: "auto",
	userSelect: "none",
	cursor: "pointer",
	"> span": {
		display: "inline-block",
		verticalAlign: "middle",
		transform: "translate3d(0, 0, 0)",
		":first-child": {
			position: "relative",
			width: "18px",
			height: "18px",
			borderRadius: "3px",
			transform: "scale(1)",
			verticalAlign: "middle",
			border: "1px solid #9098a9",
			transition: "all 0.2s ease",
			boxShadow: "0px 1px 15px 1px rgba(34, 60, 80, 0.2)",
			"> svg": {
				position: "absolute",
				top: "3px",
				left: "2px",
				fill: "none",
				stroke: "#ffffff",
				strokeWidth: "2",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeDasharray: "16px",
				strokeDashoffset: "16px",
				transition: "all 0.3s ease",
				transitionDelay: "0.1s",
				transform: "translate3d(0, 0, 0)",
			},
			":before": {
				content: '""',
				width: "100%",
				height: "100%",
				background: accentColor,
				display: "block",
				transform: "scale(0)",
				opacity: "1",
				borderRadius: "50%",
			},
		},
		":last-child": {
			paddingLeft: "8px",
		},
	},
	":hover > span:first-child": {
		borderColor: accentColor,
	},
});
