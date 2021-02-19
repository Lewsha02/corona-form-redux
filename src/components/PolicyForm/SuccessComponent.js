import React from "react";
import { useSelector } from "react-redux";
import { useFela } from "react-fela";

import { h2, h3, button } from "../../styles";

export const SuccessComponent = () => {
	const { css } = useFela();
	const policyNumber = useSelector(
		(policyObj) => policyObj.setPolicyReducer.policyNumber
	);

	return (
		<>
			<h2 className={css(h2)}>Ваш заказ успешно создан!</h2>
			<h3 className={css(h3)}>Номер вашего полиса - {policyNumber}</h3>
			<a href="/" className={css(button, buyBtn)}>Оплатить</a>
		</>
	);
};

const buyBtn = () => ({
	marginTop: '15px',
	padding: '10px 30px',
	maxWidth: '320px',
	textDecoration: 'none',
	display: 'block',
	textAlign: 'center'
});