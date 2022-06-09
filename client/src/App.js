import React, { Fragment } from 'react';
import UploadImage from './uploadImage/uploadImage';
import Header from './header/Header';

import './App.css';

const App = () => {
	return (
		<Fragment>
			<Header />
			<UploadImage />
		</Fragment>
	);
};

export default App;
