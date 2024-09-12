const express = require('express');
const router = express.Router();
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

router.get('/', async (req, res) => {
  const query = req.query.q || 'latest'; // Default query
  try {
    const response = await axios.get('https://gnews.io/api/v4/search', {
      params: {
        q: query,
        lang: 'en',
        country: 'us',
        max: 10,
        apikey: process.env.VITE_API_KEY, 
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching search news:', error);
    res.status(500).json({ error: 'Failed to fetch search news' });
  }
});

module.exports = router;
