import React, { Fragment } from 'react';
import Button from '../components/button/Button';

import './videoDownload.css';

const VideoDownload = (props) => {
	return (
		<Fragment>
			<div className="col-2 adjust__wrapper">
				<div className="adjust__instructions">
					<h3>Deel 'm op social</h3>
					<p>
						Deel je video op Instagram, Facebook of Linkedin met{' '}
						<strong>#zaagjezelfnaarzweden</strong> en maak kans op een
						vierdaagse trip naar Zweden!
					</p>
				</div>
				<Button>
					<a
						href={props.src}
						download="video.png"
						target="_blank"
						rel="no noreferrer"
					>
						Download en deel
					</a>
				</Button>
				<Button className="clean">
					<a href="/">Maak nog een video</a>
				</Button>
			</div>
			<div className="col-2">
				<div className="cropper__wrapper inverse">
					<div className="cropper__styling">
						<div className="square"></div>
						<div className="square"></div>
					</div>
					<div className="image__slider">
						<img src={props.src} alt="setting-1" />
					</div>
					<div className="cropper__styling">
						<div className="square"></div>
						<div className="square"></div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default VideoDownload;
