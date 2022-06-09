const express = require('express');
const router = express.Router();
const imageController = require('../controllers/image-controllers');
const upload = require('../middleware/uploadMiddleware');

router.post('/new-upload', imageController.saveImage);

module.exports = router;
