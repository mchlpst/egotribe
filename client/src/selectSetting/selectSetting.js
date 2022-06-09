import React, { Fragment, useEffect, useState } from 'react';
import Button from '../components/button/Button';
import combineImages from '../helpers/combineImages';
import VideoDownload from '../videoDownload/videoDownload';
import axios from 'axios';

import './selectSetting.css';

const SelectSetting = (props) => {
	const [settingImage, setSettingimage] = useState('');
	const [serverUpload, setServerUpload] = useState({});
	const [isDownloadable, setIsDownloadable] = useState(false);
	let axiosConfig = {
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			'Access-Control-Allow-Origin': '*',
		},
	};

	useEffect(() => {
		let fetchImage = async (url) => {
			const data = await combineImages(url);
			return data;
		};
		fetchImage(props.url)
			.then((data) => {
				setSettingimage(data);
				setServerUpload({ image: data });
			})
			.catch(console.error);
	}, [props]);

	const downloadable = async () => {
		axios
			.post('http://localhost:5000/api/new-upload', serverUpload, axiosConfig)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
		setIsDownloadable(true);
	};

	return (
		<Fragment>
			{!isDownloadable && (
				<Fragment>
					<div className="col-2 adjust__wrapper">
						<div className="adjust__instructions">
							<h3>Kies een setting</h3>
							<p>
								Kies een van de drie settings voor jouw inzending en bevestig
								met 'Kies deze setting'.
							</p>
						</div>
						<Button onClick={downloadable}>Kies deze setting</Button>
						<Button className="clean" onClick={props.resetSelectedImage}>
							Vorige stap
						</Button>
					</div>
					<div className="col-2">
						<div className="cropper__wrapper">
							<div className="cropper__styling">
								<div className="square"></div>
								<div className="square"></div>
							</div>
							<div className="image__slider">
								<img src={settingImage} alt="setting-1" />
							</div>
							<div className="cropper__styling">
								<div className="square"></div>
								<div className="square"></div>
							</div>
						</div>
					</div>
				</Fragment>
			)}
			{isDownloadable && <VideoDownload src={settingImage} />}
		</Fragment>
	);
};
export default SelectSetting;
