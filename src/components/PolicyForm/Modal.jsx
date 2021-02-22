import React from "react";
import { useFela } from "react-fela";
// import { Keyframe } from "fela";
import { useDispatch } from "react-redux";

import { setFormError } from "../../redux/actions/formError";

import { button } from "../../styles";
import "./modalLoader.css";

export const Modal = React.memo(({ textOfError, load }) => {
	const { css } = useFela();
	const dispatch = useDispatch();

	function handleCloseButton() {
		dispatch(setFormError(""));
	}

	return (
		<div className={css(customModal)}>
			<div className='modal-content'>
				{load ? (
					<>
						<h4 className='h4'>Ваща заявка обрабатывается</h4>
						<div className='lds-ring'>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</>
				) : (
					<>
						<h4 className='h4'>{textOfError}</h4>
						<button
							type='button'
							className={css(button)}
							onClick={handleCloseButton}
						>
							Хорошо!
						</button>
					</>
				)}
			</div>
		</div>
	);
});

const customModal = () => ({
	position: "fixed",
	zIndex: "1",
	paddingTop: "100px",
	left: "0",
	top: "0",
	width: "100%",
	height: "100%",
	overflow: "auto",
	backgroundColor: "rgba(0,0,0,0.4)",
	"> .modal-content": {
		width: "320px",
		height: "320px",
		backgroundColor: "#fff",
		boxShadow: "0px 5px 10px 2px rgba(34, 60, 80, 0.2)",
		position: "fixed",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		padding: "20px",
		"@media screen and (max-width: 480px)": {
			width: "280px",
			height: "280px",
			padding: "15px",
		},
		"> .h4": {
			fontSize: "24px",
			textAlign: "center",
			"@media screen and (max-width: 480px)": {
				fontSize: "18px",
			},
		},
		"> button": {
			textDecoration: "none",
			padding: "7px 20px",
			margin: "15px auto",
			display: "block",
			textAlign: "center",
			fontSize: "20px",
			position: "absolute",
			bottom: "10px",
			left: "50%",
			transform: "translateX(-50%)",
			maxWidth: "270px",
		},
	},
});
