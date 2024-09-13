const express = require('express');
const router = express.Router();

const {getSuggestions} = require('../controllers/suggestionscontroller');

router.get('/', getSuggestions);

module.exports = router;
