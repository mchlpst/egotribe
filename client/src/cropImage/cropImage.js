import React, { useState, useCallback, Fragment } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../helpers/getCropImage';
import Button from '../components/button/Button';

import './cropImage.css';
import SelectSetting from '../selectSetting/selectSetting';

const CropImage = (props) => {
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [rotation, setRotation] = useState(0);
	const [zoom, setZoom] = useState(1);
	const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
	const [croppedImage, setCroppedImage] = useState(null);

	const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
		setCroppedAreaPixels(croppedAreaPixels);
	}, []);

	const resetSelectedImage = () => {
		setCroppedImage('');
	};

	const showCroppedImage = useCallback(async () => {
		try {
			const croppedImage = await getCroppedImg(
				props.src,
				croppedAreaPixels,
				rotation
			);
			// console.log('donee', { croppedImage });
			setCroppedImage(croppedImage);
		} catch (e) {
			console.error(e);
		}
	}, [croppedAreaPixels, rotation, props]);

	return (
		<Fragment>
			{!croppedImage && (
				<Fragment>
					<div className="col-2 adjust__wrapper">
						<div className="adjust__instructions">
							<h3>Plaats je gezicht in het kader</h3>
							<p>
								Plaats je foto zo dat je gezicht binnen het aangegeven kader
								valt en klik op 'Volgende stap'.
							</p>
						</div>
						<h4>Schalen</h4>
						<input
							type="range"
							className="input__range"
							value={zoom}
							min={1}
							max={3}
							step={0.1}
							aria-labelledby="Zoom"
							onChange={(e) => setZoom(e.target.value)}
						/>
						<h4>Roteren</h4>
						<input
							type="range"
							className="input__range"
							value={rotation}
							min={-90}
							max={90}
							step={5}
							aria-labelledby="Rotation"
							onChange={(e) => setRotation(e.target.value)}
						/>
						<Button onClick={showCroppedImage}>Volgende stap</Button>
						<Button className="clean" onClick={props.resetCroppedImage}>
							Vorige stap
						</Button>
					</div>
					<div className="col-2">
						<div className="cropper__wrapper">
							<div className="cropper__styling">
								<div className="square"></div>
								<div className="square"></div>
							</div>
							<Cropper
								classes={{
									containerClassName: 'cropper__container',
									mediaClassName: 'string',
									cropAreaClassName: 'cropper__area',
								}}
								image={props.src}
								crop={crop}
								cropSize={{ width: 141, height: 188 }}
								aspect={3 / 4}
								zoom={zoom}
								zoomWithScroll={false}
								cropShape="round"
								showGrid={false}
								rotation={rotation}
								onCropChange={setCrop}
								onCropComplete={onCropComplete}
							/>
							<div className="cropper__styling">
								<div className="square"></div>
								<div className="square"></div>
							</div>
						</div>
					</div>
				</Fragment>
			)}
			{croppedImage && (
				<SelectSetting
					url={croppedImage}
					resetSelectedImage={resetSelectedImage}
				/>
			)}
		</Fragment>
	);
};
export default CropImage;
