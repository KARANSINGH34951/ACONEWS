const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

//import
const {getNews} = require('../controllers/newsController');

router.get('/',getNews);

module.exports = router;
