import React from 'react';
import { useFela } from 'react-fela';

import { Row, Col } from 'react-bootstrap';

import kontiLogoSvg from '../../assets/konti-logo.svg';
import phoneSvg from '../../assets/phone.svg';
import userSvg from '../../assets/user.svg';

export const TopLine = () => {
	const { css } = useFela();

	return (
			<Row className='align-items-center'>
				<Col lg={3} md={4} xs={12}>
					<div className={css(logo)}>
						<img src={kontiLogoSvg} alt="logo icon"/>
					</div>
				</Col>
				<Col lg={4} md={6} xs={8}>
					<div className={css(phone)}>
						<img src={phoneSvg} alt="phone Icon"/>
						<a href="tel:+78127026235">+7 812 702 62 35</a>
					</div>
				</Col>
				<Col lg={2} md={2} xs={4}>
					<a href="https://konti.travel/dashboard/" className={css(profile)}>
						<img src={userSvg} alt="profile icon"/>
					</a>
				</Col>
			</Row>
	);
}

const logo = () => ({
	textAlign: 'center',
	'> img': {
		maxWidth: '100%'
	},
	"@media screen and (max-width: 768px)": {
		marginBottom: '10px'
	}
});

const phone = () => ({
	textAlign: 'center',
	"> img": {
		width: '21px',
		marginRight: '15px',
	},
	"> a": {
		fontFamily: 'Roboto, sans-serif',
		fontSize: '18px',
		color: '#b2bdbb',
		textDecoration: 'none',
		verticalAlign: 'top',
	}
});

const profile = () => ({
	float: 'right',
	backgroundColor: '#002838',
	borderRadius: '50%',
	width: '35px',
	height: '35px',
	position: 'relative',
	"> img": {
		maxWidth: '60%',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)'
	}
});