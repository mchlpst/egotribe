import { createImage } from './getCropImage';

export default async function combineImages(url) {
	const background = await createImage(require('./setting-1.jpg'));
	const cover = await createImage(url);
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');

	if (!ctx) {
		return null;
	}
	canvas.width = 300;
	canvas.height = 300;

	ctx.drawImage(background, 0, 0, 300, 300);
	ctx.drawImage(cover, 105, 60, 35, 46);

	return canvas.toDataURL('image/jpeg');
	// return new Promise((resolve, reject) => {
	// 	canvas.toBlob((file) => {
	// 		resolve(URL.createObjectURL(file));
	// 	}, 'image/png');
	// });
}
