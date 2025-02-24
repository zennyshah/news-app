import React, { useState } from 'react';
import axios from 'axios';
import NewsSearch from './components/NewsSearch';
import NewsList from './components/NewsList';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const API_URL = 'https://newsapi.org/v2/everything';

const App: React.FC = () => {
  const [articles, setArticles] = useState([]);

  const fetchNews = async (query: string) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: query,
          apiKey: API_KEY,
          pageSize: 10,
        },
      });
      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <div>
      <NewsSearch onSearch={fetchNews} />
      <NewsList articles={articles} />
    </div>
  );
};

export default App;
