const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();


const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());



// Create a route to fetch news
app.get('/news', async (req, res) => {
  try {
    const response = await axios.get(`https://gnews.io/api/v4/top-headlines?token=${process.env.VITE_API_KEY}&lang=en`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
