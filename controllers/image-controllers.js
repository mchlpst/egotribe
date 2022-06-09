const fs = require('fs');
const uuid = require('uuid');

function blobToFile(theBlob, fileName) {
	theBlob.lastModifiedDate = new Date();
	theBlob.name = fileName;
	return theBlob;
}

const saveImage = (req, res, next) => {
	const baseData = req.body.image.replace(/^data:image\/jpeg;base64,/, '');

	if (!req.body) {
		res.status(401).json({ error: 'Please provide an image' });
	}
	fs.writeFile(
		__dirname + `/../images/${uuid.v4()}.jpeg`,
		baseData,
		'base64',
		function (err) {
			if (err) {
				return console.log(err);
			}
		}
	);
	return res.status(200);
};

exports.saveImage = saveImage;
