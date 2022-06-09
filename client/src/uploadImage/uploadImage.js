import React, { Fragment, useEffect, useState } from 'react';
import CropImage from '../cropImage/cropImage';

import './uploadImage.css';

const UploadImage = () => {
	const [image, setImage] = useState();
	const [imageUrl, setImageUrl] = useState('');

	const onSubmitHandler = async (data, event) => {
		event.prefentDefault();
	};
	useEffect(() => {
		if (!image) return;

		setImageUrl(URL.createObjectURL(image));
	}, [image]);

	const imageChangeHandler = (e) => {
		setImage(e.target.files[0]);
	};

	const resetCroppedImage = () => {
		setImageUrl('');
	};
	return (
		<main className="container">
			{!imageUrl && (
				<Fragment>
					<form
						className="col-2"
						method="post"
						encType="multipart/form-data"
						onSubmit={onSubmitHandler}
					>
						<div className="upload__command">
							<h3>Upload een selfie</h3>
							<p>
								Maak of kies een foto waarop je gezicht recht van voren
								zichtbaar is.
							</p>
						</div>
						<label htmlFor="avatar" className="button">
							Kies of maak een foto
							<input
								type="file"
								name="avatar"
								id="avatar"
								alt="Kies of maak een foto"
								onChange={(e) => imageChangeHandler(e)}
							/>
						</label>
					</form>
					<div className="white_bg col-2 selfie-addon">
						<h4>5 tips voor de ultieme selfie</h4>
						<ol>
							<li>Zorg voor voldoende licht</li>
							<li>Ontspan je</li>
							<li>Zorg dat je gezicht én hals volledig in beeld zijn</li>
							<li>Kijk in de camera, niet op je scherm</li>
							<li>
								Maak meedere foto's, zodat je kunt kiezen welke je gebruikt
							</li>
						</ol>
					</div>
				</Fragment>
			)}
			{imageUrl && (
				<CropImage src={imageUrl} resetCroppedImage={resetCroppedImage} />
			)}
		</main>
	);
};
export default UploadImage;
