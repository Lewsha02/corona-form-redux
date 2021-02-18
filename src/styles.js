export const fontColor = "#103847";
export const accentColor = "#ea6846";

export const section = () => ({
	padding: "120px 0",
});

export const h2 = () => ({
	fontSize: "32px",
	margin: "0",
	color: fontColor,
	"@media screen and (max-width: 480px)": {
		fontSize: "28px",
	},
});

export const h3 = () => ({
	fontSize: "20px",
	margin: "35px 0 20px 0",
	color: fontColor,
	"@media screen and (max-width: 480px)": {
		fontSize: "18px",
	},
});

export const defaultInput = () => ({
	width: "100%",
	padding: "10px 30px",
	fontSize: "16px",
	border: "none",
	borderRadius: "10px",
	boxShadow: "0px 5px 5px -5px rgba(34, 60, 80, 0.6)",
	outline: "none",
	marginBottom: "30px",
	"&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
		"-webkit-appearance": "none",
		margin: 0
	}
});

export const button = () => ({
	outline: "none",
	border: "none",
	width: "100%",
	padding: "15px 0",
	fontSize: "30px",
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
