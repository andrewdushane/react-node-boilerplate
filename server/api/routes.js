const express = require('express');
const { home, example } = require('./ApiController');
let router = express.Router();

router.get('/', home);

router.get('/example', example);

module.exports = router;
