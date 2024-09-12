// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

// Import routes
const newsRoutes = require('./routes/newsRoutes');
const searchRoutes = require("./routes/search");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// Use routes
app.use('/news', newsRoutes);
app.use('/search', searchRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
