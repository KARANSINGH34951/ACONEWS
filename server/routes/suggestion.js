const express = require('express');
const router = express.Router();

const {getSuggestions} = require('../controllers/suggestionscontroller');
s
router.get('/', getSuggestions);

module.exports = router;
