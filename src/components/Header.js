import hamburger from '../images/icon-hamburger.svg';
import closeBtn from '../images/icon-close.svg';
import logo from '../images/logo.svg';
import RequestBtn from './RequestBtn';
import { useState } from 'react';
import React from 'react';

function Header() {
	const [imageURL, setImageURL] = useState(hamburger);
	const [isClassActive, setIsClassActive] = useState(false);

	const handleClick = () => {
		const navLinks = document.querySelectorAll('.nav_grid_container li');

		// Toggle image src/url
		if (imageURL !== closeBtn) {
			setImageURL(closeBtn);
			setIsClassActive(!isClassActive);
		} else {
			setImageURL(hamburger);
			setIsClassActive(!isClassActive);
		}

		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
					1.2}s`;
			}
		});
	};

	return (
		<header className="flex_container_header">
			<div className="header__logo">
				<img src={logo} alt="Easybank" />
			</div>

			<nav
				className={`nav_grid_container ${
					isClassActive ? 'mobile-nav-active' : ''
				}`}
			>
				<ul>
					<li className="nav_list_items">
						<a href="#home">Home</a>
					</li>
					<li className="nav_list_items">
						<a href="#about">About</a>
					</li>
					<li className="nav_list_items">
						<a href="#contact">Contact</a>
					</li>
					<li className="nav_list_items">
						<a href="#blog">Blog</a>
					</li>
					<li className="nav_list_items">
						<a href="#careers">Careers</a>
					</li>
				</ul>
			</nav>

			<nav className="hamburger_menu_btn right" onClick={handleClick}>
				<img src={imageURL} alt="menu" />
			</nav>

			<RequestBtn />
		</header>
	);
}

export default Header;
