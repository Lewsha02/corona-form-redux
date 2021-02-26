import React from "react";
import { useFela } from "react-fela";
import { Container, Row, Col } from "react-bootstrap";
import { IMaskInput } from "react-imask";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Select from "react-select";

import {
	h2,
	h3,
	defaultInput,
	fontColor,
	button,
	selectStyles,
	section,
} from "../../styles";

import { MonthMenu } from "./MonthMenu.jsx";
import { Confidentiality } from "./Confidentiality.jsx";
import { SuccessComponent } from "./SuccessComponent.jsx";

import { setPolicyNumber } from "../../redux/actions/setPolicy";

import { setFormError } from "../../redux/actions/formError";

export const PolicyForm = React.memo(() => {
	const { css } = useFela();
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = React.useState({});
	const [success, setSuccess] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);

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

	function handleParentSelect({ value }) {
		setInputValue({
			...inputValue,
			parentGender: value,
		});
	}

	function handleChildSelect({ value }) {
		setInputValue({
			...inputValue,
			childGender: value,
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

		const parentNameArray = parentName && parentName.split(" ");
		const childNameArray = childName && childName.split(" ");

		const pasportSeria = parentPasport && parentPasport.slice(0, 4);
		const pasportNum = parentPasport && parentPasport.slice(4);

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
			setFormError("Заполните форму!");
		} else if (!confCheck) {
			setFormError("Поставьте галочку напротив политики конфиденциальности!");
		} else if (parentPhone.length !== 11) {
			setFormError("Введите коректный номер телефона!");
		} else if (parentDate.length !== 10) {
			setFormError("Введите коректную дату рождения!");
		} else if (parentPasport.length !== 10) {
			setFormError("Введите корректные паспортные данные!");
		} else if (childAge < 5 || childAge > 18) {
			setFormError("Ребенку должно быть от 5 до 18 лет!");
		} else {
			setIsLoading(true);
			axios({
				method: "get",
				url: `https://kontinent-lobby.com/travel/book.json?key=a000154a364e819d25b043e79d713e2d6ee62244&if[company]=rgslife&if[date_start]=01.10.2021&params[imageType]=white&if[corona2]=${countOfMonths}&ord[tourists][0][firstName]=${childNameArray[1]}&ord[tourists][0][lastName]=${childNameArray[0]}&ord[tourists][0][middleName]=${childNameArray[2]}&ord[tourists][0][gender]=${childGender}&ord[tourists][0][birthDay]=${childDate}&ord[buyer][firstName]=${parentNameArray[1]}&ord[buyer][lastName]=${parentNameArray[0]}&ord[buyer][middleName]=${parentNameArray[2]}&ord[buyer][gender]=${parentGender}&ord[buyer][email]=${parentEmail}&ord[buyer][birthDay]=${parentDate}&ord[buyer][passport_type]=1&ord[buyer][passport_ser]=${pasportSeria}&ord[buyer][passport_num]=${pasportNum}&ord[buyer][phone]=${parentPhone}&marker=site1`,
				timeout: 8000,
			})
				.then(({ data }) => {
					setIsLoading(false);
					if (data.success === false) {
						setFormError(data.errmessg);
					} else {
						setSuccess(true);
						dispatch(setPolicyNumber(data.policy[0]));
					}
				})
				.catch((error) => {
					if (error.code === "ECONNABORTED") {
						dispatch(setFormError("Cервер не отвечает"));
					} else {
						throw error;
					}
				});
		}
	}

	function handleInputWarning({ target }) {
		const nextEl = target.nextElementSibling;

		function addClasses(input, span) {
			input.classList.add("warning");
			span.classList.add("active");
		}

		function removeClasses(input, span) {
			input.classList.remove("warning");
			span.classList.remove("active");
		}

		if (target.name === "parentName") {
			if (!target.value) {
				addClasses(target, nextEl);
			} else {
				removeClasses(target, nextEl);
			}
		}

		if (target.name === "parentDate") {
			const userDate = new Date(target.value);
			const userAge = new Date().getFullYear() - userDate.getFullYear();
			if (userAge < 18 || target.value.length !== 10) {
				addClasses(target, nextEl);
			} else {
				removeClasses(target, nextEl);
			}
		}

		if (target.name === "parentPasport") {
			if (target.value.length !== 10) {
				addClasses(target, nextEl);
			} else {
				removeClasses(target, nextEl);
			}
		}

		if (target.name === "parentPhone") {
			if (target.value.length !== 16) {
				addClasses(target, nextEl);
			} else {
				removeClasses(target, nextEl);
			}
		}

		if (target.name === "childName") {
			if (!target.value) {
				addClasses(target, nextEl);
			} else {
				removeClasses(target, nextEl);
			}
		}

		if (target.name === "childDate") {
			const childDate = new Date(target.value);
			const childAge = new Date().getFullYear() - childDate.getFullYear();

			if (childAge < 5 || childAge > 18 || target.value.length !== 10) {
				addClasses(target, nextEl);
			} else {
				removeClasses(target, nextEl);
			}
		}
	}

	const genderOptions = [
		{ value: "M", label: "мужской" },
		{ value: "F", label: "женский" },
	];

	return (
		<section className={css(section)}>
			<a name='formScroll'></a>
			<Container>
				{success ? (
					<SuccessComponent />
				) : (
					<form>
						<Row>
							<Col lg={12}>
								<h2 className={css(h2, formHeader)}>Оформление полиса</h2>
							</Col>
							<Col lg={12}>
								{textOfError ? (
									<div className='alert alert-danger' role='alert'>
										{textOfError}
									</div>
								) : null}
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
									onBlur={handleInputWarning}
									onChange={handleTextInput}
								/>
								<span className={css(inputWarning)}>Введите ФИО</span>
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
									onBlur={handleInputWarning}
									placeholder='Дата рождения'
									className={css(defaultInput)}
								/>
								<span className={css(inputWarning)}>
									Вам должно быть больше 18 лет
								</span>
							</Col>
							<Col lg={3} md={6}>
								<Select
									options={genderOptions}
									styles={selectStyles}
									placeholder='Пол'
									onChange={handleParentSelect}
								/>
							</Col>
							<Col lg={3} md={6}>
								<IMaskInput
									mask={"000*[******]"}
									unmask={true}
									onAccept={(value, mask) => handleMaskInput(value, mask)}
									name='parentPasport'
									required
									placeholder='Серия номер паспорта'
									onBlur={handleInputWarning}
									className={css(defaultInput)}
								/>
								<span className={css(inputWarning)}>
									Введите корректные паспортные данные
								</span>
							</Col>
							<Col lg={3} md={6}>
								<IMaskInput
									mask={"+{7}(000)000-00-00"}
									unmask={true}
									onAccept={(value, mask) => handleMaskInput(value, mask)}
									name='parentPhone'
									required
									placeholder='Телефон'
									onBlur={handleInputWarning}
									className={css(defaultInput)}
								/>
								<span className={css(inputWarning)}>
									Введите корректный номер телефона
								</span>
							</Col>
							<Col lg={3} md={6}>
								<input
									type='email'
									name='parentEmail'
									className={css(defaultInput)}
									placeholder='Email'
									required
									onChange={handleTextInput}
									onBlur={handleInputWarning}
								/>
								<span className={css(inputWarning)}>
									Введите электронный адрес
								</span>
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
									onBlur={handleInputWarning}
								/>
								<span className={css(inputWarning)}>Введите ФИО</span>
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
									onBlur={handleInputWarning}
								/>
								<span className={css(inputWarning)}>от 5 до 18 лет</span>
							</Col>
							<Col lg={3} md={6}>
								<Select
									options={genderOptions}
									styles={selectStyles}
									placeholder='Пол'
									onChange={handleChildSelect}
								/>
								<span className={css(inputWarning)}>Выберите пол</span>
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
								<a className={css(button)} onClick={handleSubmitButton}>
									Оформить
								</a>
							</Col>
						</Row>
						{/* {textOfError || isLoading ? (
							<Modal textOfError={textOfError} load={isLoading} />
						) : null} */}
					</form>
				)}
			</Container>
		</section>
	);
});

const formHeader = () => ({
	paddingBottom: "20px",
});

const inputWarning = () => ({
	fontSize: "12px",
	color: "red",
	position: "absolute",
	bottom: "13px",
	left: "30px",
	opacity: "0",
	"&.active": {
		opacity: "1",
	},
});

const finalCost = () => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	backgroundColor: "#e9e9e9",
	padding: "20px 30px",
	borderRadius: "10px",
	"> h2": {
		fontSize: "24px",
		fontFamily: "Roboto, sans-serif",
		fontWeight: "bold",
		"@media screen and (max-width: 480px)": {
			fontSize: "20px",
		},
	},
	"> .price": {
		fontSize: "24px",
		fontFamily: "Roboto, sans-serif",
		fontWeight: "bold",
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
