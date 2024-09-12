const suggestionsData = require('../utils/suggestionData.json');

// Controller function to get suggestions based on query
const getSuggestions = (req, res) => {
  const query = req.query.q.toLowerCase();
  
  // Filter suggestions based on the query
  const filteredSuggestions = suggestionsData.filter((suggestion) =>
    suggestion.toLowerCase().includes(query)
  );

  res.json(filteredSuggestions);
};

module.exports = {
  getSuggestions,
};
