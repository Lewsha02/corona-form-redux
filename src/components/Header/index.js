import React from "react";
import { useFela } from "react-fela";

import { TopLine } from "./TopLine";
import { Banner } from "./Banner";
import { Steps } from "./Steps";

import { Container } from "react-bootstrap";

import HeaderBg from "../../assets/headerBg.png";

export const Header = () => {
	const { css } = useFela();

	return (
		<header className={css(header)}>
			<Container>
				<TopLine />
				<Banner />
				<Steps />
			</Container>
		</header>
	);
};

const header = () => ({
	backgroundColor: "#003C50",
	padding: "30px 0",
	backgroundImage: `url(${HeaderBg})`,
	backgroundRepeat: "no-repeat",
	backgroundSize: "contain",
	backgroundPosition: "bottom right",
	"@media screen and (max-width: 992px)": {
		backgroundImage: 'none'
	}
});
