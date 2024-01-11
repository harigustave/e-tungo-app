const express = require('express');
const appController = require('../controllers/controllers');

const router = express.Router();

router.get('/', appController.etungo_index);

module.exports = router;