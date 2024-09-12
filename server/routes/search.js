const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

const {searchNews}= require('../controllers/searchcontroller');

router.get('/',searchNews);

module.exports = router;
