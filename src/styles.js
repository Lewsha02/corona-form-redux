export const fontColor = "#103847";
export const accentColor = "#ea6846";

export const section = () => ({
	padding: "120px 0",
});

export const h2 = () => ({
	fontSize: "32px",
	margin: "0",
	fontFamily: "Roboto, sans-serif",
	fontWeight: "bold",
	color: fontColor,
	"@media screen and (max-width: 480px)": {
		fontSize: "28px",
	},
});

export const h3 = () => ({
	fontSize: "18px",
	margin: "40px 0 20px 0",
	color: fontColor,
	fontFamily: "Roboto, sans-serif",
	fontWeight: "bold",
	"@media screen and (max-width: 480px)": {
		fontSize: "16px",
	},
});

export const defaultInput = () => ({
	width: "100%",
	padding: "10px 30px",
	fontSize: "14px",
	border: "none",
	borderRadius: "10px",
	boxShadow: "0px 5px 5px -5px rgba(34, 60, 80, 0.6)",
	outline: "none",
	marginBottom: "30px",
	fontFamily: "Roboto, sans-serif",
	fontWeight: "300",
	"&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
		"-webkit-appearance": "none",
		margin: 0,
	},
});

export const button = () => ({
	outline: "none",
	border: "none",
	width: "100%",
	padding: "20px 0",
	fontSize: "24px",
	fontFamily: 'Roboto, sans-serif',
	fontWeight: 'bold',
	borderRadius: "10px",
	color: fontColor,
	backgroundColor: "#cce903",
	":hover": {
		backgroundColor: "#b6d104",
	},
	":focus": {
		backgroundColor: "#d3f304",
	},
	"@media screen and (max-width: 768px)": {
		marginTop: "15px",
	},
	"@media screen and (max-width: 480px)": {
		fontSize: "20px",
		padding: "15px 0",
	},
});

export const selectStyles = {
	control: (styles) => {
		return {
			...styles,
			border: "none",
			outline: "none",
			boxShadow: "0px 5px 5px -5px rgba(34, 60, 80, 0.6)",
			fontSize: "14px",
			fontFamily: "Roboto, sans-serif",
			fontWeight: "300",
			borderRadius: "10px",
			marginBottom: '10px',
			"@media screen and (max-width: 480px)": {
				marginBottom: '15px',
			}
		};
	},
	placeholder: (styles) => {
		return {
			...styles,
			paddingLeft: '15px',
			fontFamily: "sans-serif",
		};
	},
	option: (styles) => {
		return {
			...styles,
			fontSize: "14px",
			fontFamily: "Roboto, sans-serif",
			fontWeight: "300",
			padding: "10px 30px",
			backgroundColor: "transparent",
			color: "#000",
			":hover": {
				...styles[":hover"],
				backgroundColor: "transparent",
				cursor: "pointer",
			},
		};
	},
	singleValue: (styles) => {
		return {
			...styles,
			fontFamily: "sans-serif",
		};
	},
};
