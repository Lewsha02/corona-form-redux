import React from "react";
import { useSelector } from "react-redux";
import { useFela } from "react-fela";

import { h2 } from "../../styles";

export const SuccessComponent = () => {
	const { css } = useFela();
	const policyNumber = useSelector(
		(policyObj) => policyObj.setPolicyReducer.policyNumber
	);

	return <h2 className={css(h2)}>Номер вашего полиса - {policyNumber}</h2>;
};
