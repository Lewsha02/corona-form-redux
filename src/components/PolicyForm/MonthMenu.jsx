import React from "react";
import { Col } from "react-bootstrap";
import { useFela } from "react-fela";
import axios from "axios";
import { useDispatch } from "react-redux";

import { accentColor } from "../../styles";

import { setFinalPrice, setMonth } from "../../redux/actions/finalPrice";

export const MonthMenu = () => {
	const dispatch = useDispatch();
	const { css } = useFela();
	const [radioValue, setRadioValue] = React.useState({
		"month-3": true,
	});

	function handleRadioInput({ target }) {
		const id = target.id;
		const isChecked = target.checked;

		setRadioValue({
			[id]: isChecked,
		});
	}

	const countOfMonths = Object.keys(radioValue)[0].slice(6);

	React.useEffect(() => {
		axios
			.get(
				`https://kontinent-lobby.com/travel/fullcalc.json?key=a000154a364e819d25b043e79d713e2d6ee62244&if[date_start]=01.04.2021&if[corona2]=${countOfMonths}&params[imageType]=white&lang=en&if[company]=rgslife`
			)
			.then(({ data }) => {
				const price = data.pay_sum.toString();
				dispatch(setFinalPrice(price));
				dispatch(setMonth(countOfMonths));
			})
			.catch((error) => {
				console.error(error);
			});
	}, [radioValue, countOfMonths]);

	return (
		<Col lg={12}>
			<ul className={css(navMonth)}>
				<li>
					<input
						type='radio'
						name='month-radio'
						className={css(radioInput)}
						id='month-1'
						onChange={handleRadioInput}
					/>
					<label className={css(radioLabel)} htmlFor='month-1'>
						1 месяц
					</label>
				</li>
				<li>
					<input
						type='radio'
						name='month-radio'
						className={css(radioInput)}
						id='month-3'
						onChange={handleRadioInput}
						defaultChecked
					/>
					<label className={css(radioLabel)} htmlFor='month-3'>
						3 месяца
					</label>
				</li>
				<li>
					<input
						type='radio'
						name='month-radio'
						className={css(radioInput)}
						id='month-6'
						onChange={handleRadioInput}
					/>
					<label className={css(radioLabel)} htmlFor='month-6'>
						6 месяцев
					</label>
				</li>
				<li>
					<input
						type='radio'
						name='month-radio'
						className={css(radioInput)}
						id='month-12'
						onChange={handleRadioInput}
					/>
					<label className={css(radioLabel)} htmlFor='month-12'>
						12 месяцев
					</label>
				</li>
			</ul>
		</Col>
	);
};

const navMonth = () => ({
	listStyleType: "none",
	display: "block",
	margin: "0",
	padding: "0",
	marginTop: "15px",
	"> li": {
		display: "inline-block",
		marginRight: "60px",
		fontSizi: '16px',
		fontFamily: 'Roboto, sans-serif',
		fontWeight: '300',
		color: "#9B9B9B",
		"@media screen and (max-width: 992px)": {
			marginRight: "40px",
		},
		"@media screen and (max-width: 768px)": {
			marginTop: "15px",
		},
	},
	"@media screen and (max-width: 768px)": {
		display: 'flex',
		flexWrap: 'wrap',
		margin: '0 auto',
		justifyContent: 'center',
		"> li": {
			flexBasis: '30%'
		}
	},
	"@media screen and (max-width: 480px)": {
		display: 'flex',
		"> li": {
			flex: 1,
			fontSize: '14px'
		}
	}
});

const radioInput = () => ({
	position: "absolute",
	left: "-9999px",
	":checked + label:after": {
		content: '""',
		background: accentColor,
	},
});

const radioLabel = () => ({
	position: "relative",
	paddingLeft: "40px",
	cursor: "pointer",
	lineHeight: "26px",
	display: "inline-block",
	":before": {
		content: '""',
		position: "absolute",
		left: "0",
		top: "0",
		width: "29px",
		height: "29px",
		border: "1px solid #ddd",
		borderRadius: "100%",
		boxShadow: "0px 1px 15px 1px rgba(34, 60, 80, 0.2)",
	},
	":after": {
		content: '""',
		width: "15px",
		height: "15px",
		background: "#E4E4E4",
		position: "absolute",
		top: "6.6px",
		left: "6.6px",
		borderRadius: "100%",
	},
	"@media screen and (max-width: 480px)": {
		paddingLeft: '30px',
		":before": {
			width: "25px",
			height: '25px',
		},
		":after": {
			width: '11px',
			height: '11px'
		}
	}
});
