const axios = require('axios');


const searchNews = async (req, res) => {
  const query = req.query.q || 'latest'; 
  const apikey = process.env.VITE_API_KEY;

  try {
    const response = await axios.get('https://gnews.io/api/v4/search', {
      params: {
        q: query,
        lang: 'en',
        country: 'us',
        max: 9,
        apikey: apikey,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching search news:', error);
    res.status(500).json({ error: 'Failed to fetch search news' });
  }
};

module.exports = {
  searchNews
};
