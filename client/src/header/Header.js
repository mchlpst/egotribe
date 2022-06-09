import React from 'react';

import './Header.css';

const Header = () => {
	return (
		<header>
			<div className="logo">
				<img src="/images/Logo.png" alt="logo Husqvarna" />
			</div>
			<section className="mobile__hidden">
				<img src="/images/ZJNZ.png" alt="Zaag jezelf naar Zweden" />
			</section>
		</header>
	);
};
export default Header;
