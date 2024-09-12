const express = require('express');
const app = express();
const router = express.Router();
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
app.use(cors());


router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`https://gnews.io/api/v4/top-headlines?token=${process.env.VITE_API_KEY}&lang=en`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

module.exports = router;
