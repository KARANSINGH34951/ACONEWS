const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

// Import routes
const newsRoutes = require('./routes/newsRoutes');
const searchRoutes = require("./routes/search");
const suggestionRoutes = require("./routes/suggestion");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(cors({
  origin: 'https://aconews-585dd.web.app/'  // Replace with your actual frontend domain if deployed
}));

// Use routes
app.use('/news', newsRoutes);
app.use('/search', searchRoutes);
app.use('/suggestions', suggestionRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
