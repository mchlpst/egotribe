import React from 'react';

import './Button.css';

const Button = (props) => {
	if (props.href) {
		return (
			<a className={`button ${props.className}`} href={props.href}>
				{props.children}
			</a>
		);
	}
	//  Maybe if I add the router-dom I need this
	// if (props.to) {
	// 	return (
	// 		<Link
	// 			to={props.to}
	// 			exact={props.exact}
	// 			className={`button ${props.className}`}
	// 		>
	// 			{props.children}
	// 		</Link>
	// 	);
	// }
	return (
		<button
			className={`button ${props.className}`}
			type={props.type}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
};
export default Button;
