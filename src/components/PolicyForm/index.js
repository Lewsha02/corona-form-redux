import React from "react";
import { useFela } from "react-fela";
import { Row, Col } from "react-bootstrap";
import { IMaskInput } from "react-imask";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { h2, h3, defaultInput, fontColor, button } from "../../styles";

import { MonthMenu } from "./MonthMenu";
import { Confidentiality } from "./Confidentiality";
import { Modal } from "./Modal";
import { SuccessComponent } from "./SuccessComponent";

import { setFormError } from "../../redux/actions/formError";
import { setPolicyNumber } from "../../redux/actions/setPolicy";

export const PolicyForm = () => {
	const { css } = useFela();
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = React.useState({});
	const [success, setSuccess] = React.useState(false);

	const textOfError = useSelector(
		(errorObj) => errorObj.formErrorReducer.textOfError
	);

	const finalPrice = useSelector(
		(priceObj) => priceObj.finalPriceReducer.price
	);

	const confCheck = useSelector(
		(confObj) => confObj.formErrorReducer.confChecked
	);

	const countOfMonths = useSelector(
		(monthObj) => monthObj.finalPriceReducer.month
	);

	function handleTextInput({ target }) {
		const value = target.value;
		const name = target.name;

		setInputValue({
			...inputValue,
			[name]: value,
		});
	}

	function handleMaskInput(value, { el }) {
		setInputValue({
			...inputValue,
			[el.input.name]: value,
		});
	}

	function handleSubmitButton() {
		const { parentName } = inputValue;
		const { parentDate } = inputValue;
		const { parentGender } = inputValue;
		const { parentPasport } = inputValue;
		const { parentPhone } = inputValue;
		const { parentEmail } = inputValue;
		const { childName } = inputValue;
		const { childDate } = inputValue;
		const { childGender } = inputValue;

		const childDateValue = new Date(childDate);
		const childAge = new Date().getFullYear() - childDateValue.getFullYear();

		if (
			!parentName ||
			!parentDate ||
			!parentGender ||
			!parentPasport ||
			!parentPhone ||
			!parentEmail ||
			!childName ||
			!childDate ||
			!childGender
		) {
			dispatch(setFormError("Заполните все данные формы!"));
		} else if (!confCheck) {
			dispatch(
				setFormError("Поставьте галочку напротив политики конфиденциальности!")
			);
		} else if (childAge < 5 || childAge > 18) {
			dispatch(setFormError("Ребенку должно быть от 5 до 18 лет!"));
		} else {
			axios
				.get(
					`https://kontinent-lobby.com/travel/book.json?key=a000154a364e819d25b043e79d713e2d6ee62244&if[company]=rgslife&if[date_start]=01.10.2021&params[imageType]=white&if[corona2]=${countOfMonths}&ord[tourists][0][firstName]=Ivanova&ord[tourists][0][lastName]=Anna&ord[tourists][0][middleName]=Ivanovna&ord[tourists][0][gender]=F&ord[tourists][0][birthDay]=01.04.2010&ord[buyer][firstName]=Ivanov&ord[buyer][lastName]=Ivan&ord[buyer][middleName]=Ivanovich&ord[buyer][gender]=M&ord[buyer][email]=mmm@mail.ru&ord[buyer][birthDay]=01.04.1990&ord[buyer][passport_type]=1&ord[buyer][passport_ser]=1111&ord[buyer][passport_num]=123456&ord[buyer][phone]=+7(999)123-45-67&marker=site1`
				)
				.then(({ data }) => {
					setSuccess(true);
					dispatch(setPolicyNumber(data.policy[0]));
				});
		}
	}

	return (
		<>
			{success ? (
				<SuccessComponent />
			) : (
				<form>
					<Row>
						<Col>
							<h2 className={css(h2)}>Оформление полиса</h2>
						</Col>
					</Row>
					<h3 className={css(h3)}>Данные страхователя</h3>
					<Row>
						<Col lg={6} md={12}>
							<input
								type='text'
								name='parentName'
								className={css(defaultInput)}
								placeholder='Фамилия Имя Отчество'
								required
								onChange={handleTextInput}
							/>
						</Col>
						<Col lg={3} md={6}>
							<IMaskInput
								mask={Date}
								min={new Date(1940, 0, 1)}
								max={new Date()}
								lazy={true}
								unmask={true}
								onAccept={(value, mask) => handleMaskInput(value, mask)}
								name='parentDate'
								required
								placeholder='Дата рождения'
								className={css(defaultInput)}
							/>
						</Col>
						<Col lg={3} md={6}>
							<input
								type='text'
								name='parentGender'
								className={css(defaultInput)}
								placeholder='Пол'
								required
								onChange={handleTextInput}
							/>
						</Col>
						<Col lg={3} md={6}>
							<input
								type='number'
								name='parentPasport'
								className={css(defaultInput)}
								placeholder='Серия номер паспорта'
								required
								maxLength='10'
								onChange={handleTextInput}
							/>
						</Col>
						<Col lg={3} md={6}>
							<IMaskInput
								mask={"+{7}(000)000-00-00"}
								unmask={true}
								onAccept={(value, mask) => handleMaskInput(value, mask)}
								name='parentPhone'
								required
								placeholder='Телефон'
								className={css(defaultInput)}
							/>
						</Col>
						<Col lg={3} md={6}>
							<input
								type='email'
								name='parentEmail'
								className={css(defaultInput)}
								placeholder='Email'
								required
								onChange={handleTextInput}
							/>
						</Col>
					</Row>
					<h3 className={css(h3)}>Данные застрахованного</h3>
					<Row>
						<Col lg={6} md={12}>
							<input
								type='text'
								name='childName'
								className={css(defaultInput)}
								placeholder='Фамилия Имя Отчество'
								required
								onChange={handleTextInput}
							/>
						</Col>
						<Col lg={3} md={6}>
							<IMaskInput
								mask={Date}
								min={new Date(1940, 0, 1)}
								max={new Date()}
								lazy={true}
								unmask={true}
								onAccept={(value, mask) => handleMaskInput(value, mask)}
								name='childDate'
								required
								placeholder='Дата рождения'
								className={css(defaultInput)}
							/>
						</Col>
						<Col lg={3} md={6}>
							<input
								type='text'
								name='childGender'
								className={css(defaultInput)}
								placeholder='Пол'
								required
								onChange={handleTextInput}
							/>
						</Col>
						<MonthMenu />
						<Confidentiality />
						<Col lg={6} md={8}>
							<div className={css(finalCost)}>
								<h2 className={css(h2)}>Стоимость полиса</h2>
								<div className='price'>
									<span id='final-price'>{finalPrice}</span> ₽
								</div>
							</div>
						</Col>
						<Col lg={3} md={4}>
							<button
								type='button'
								className={css(button)}
								onClick={handleSubmitButton}
							>
								Оформить
							</button>
						</Col>
					</Row>
					{textOfError ? <Modal textOfError={textOfError} /> : null}
				</form>
			)}
		</>
	);
};

const finalCost = () => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	backgroundColor: "#e9e9e9",
	padding: "15px 30px",
	borderRadius: "10px",
	"> h2": {
		"@media screen and (max-width: 480px)": {
			fontSize: "20px",
		},
	},
	"> .price": {
		fontSize: "30px",
		color: fontColor,
		"@media screen and (max-width: 480px)": {
			fontSize: "20px",
			marginBottom: "0",
		},
	},
	"@media screen and (max-width: 480px)": {
		padding: "15px 20px",
	},
});
