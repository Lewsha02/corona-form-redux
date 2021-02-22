import React from "react";
import { useSelector } from "react-redux";
import { useFela } from "react-fela";

import { h2, h3, button } from "../../styles";
import axios from "axios";

export const SuccessComponent = React.memo(() => {
	const { css } = useFela();
	const [payUrl, setPayUrl] = React.useState("");

	const policyNumber = useSelector(
		(policyObj) => policyObj.setPolicyReducer.policyNumber
	);
	const policyPrice = useSelector(
		(policyObj) => policyObj.finalPriceReducer.price
	);

	function handleBuyButton(event) {
		event.preventDefault();
		axios
			.get(
				`https://kontinent-lobby.com/pay.json?key=a000154a364e819d25b043e79d713e2d6ee62244&order=${policyNumber}&pay_sum=${policyPrice}&mode=2&success_url=https://konti.travel&failure_url=https://konti.travel&return_url=https://konti.travel`
			)
			.then(({ data }) => {
				return {
					url: data["0"].url,
					urlParams: data["0"].params,
				};
			})
			.then(({ url, urlParams }) => {
				window.open(`${url}?MNT_ID=${urlParams.MNT_ID}&MNT_TRANSACTION_ID=${urlParams.MNT_TRANSACTION_ID}&MNT_CURRENCY_CODE=${urlParams.MNT_CURRENCY_CODE}&MNT_AMOUNT=${urlParams.MNT_AMOUNT}&MNT_SIGNATURE=${urlParams.MNT_SIGNATURE}&MNT_SUCCESS_URL=https://konti.travel&MNT_FAIL_URL=https://konti.travel&MNT_RETURN_URL=https://konti.travel`)
			});
	}

	return (
		<>
			<h2 className={css(h2)}>Ваш заказ успешно создан!</h2>
			<h3 className={css(h3)}>Номер вашего полиса - {policyNumber}</h3>
			<h3 className={css(h3)}>Цена вашего заказа составила {policyPrice} ₽</h3>
			<a
				href={payUrl}
				className={css(button, buyBtn)}
				onClick={handleBuyButton}
			>
				Оплатить
			</a>
		</>
	);
});

const buyBtn = () => ({
	marginTop: "15px",
	padding: "10px 30px",
	maxWidth: "320px",
	textDecoration: "none",
	display: "block",
	textAlign: "center",
});
