const axios = require('axios');

const getNews = async (req, res) => {
  const category = req.query.category || 'general'; 
  const country = req.query.country || 'us';
  const page = parseInt(req.query.page) || 1;  // Default to page 1
  const articlesPerPage = 9;  // Number of articles per page
  const start = (page - 1) * articlesPerPage;
  const apikey = process.env.VITE_API_KEY;
  const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=${country}&max=9&apikey=${apikey}`;

  try {
    const response = await axios.get(url);
    const articles = response.data.articles;
    const paginatedArticles = articles.slice(start, start + articlesPerPage);
    res.json({
      articles: paginatedArticles,
      totalArticles: articles.length  
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
};

module.exports = {
  getNews
};
