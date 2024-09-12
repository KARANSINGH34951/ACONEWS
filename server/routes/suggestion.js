const express = require('express');
const router = express.Router();
const suggestionsData = require('../utils/suggestionData.json');




router.get('/', (req, res) => {
  const query = req.query.q.toLowerCase();


  const filteredSuggestions = suggestionsData.filter((suggestion) =>
    suggestion.toLowerCase().includes(query)
  );

  res.json(filteredSuggestions);
});

module.exports = router;
