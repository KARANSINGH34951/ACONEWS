const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

//routes
const newsRoutes = require('./routes/newsRoutes');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

//  a route to fetch news
app.use('/news', newsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
