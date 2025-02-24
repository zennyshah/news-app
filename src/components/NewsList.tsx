import React from 'react';
import styles from '../styles/NewsList.module.scss';

// Define the structure of a news article
interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

interface NewsListProps {
  articles: Article[]; // List of news articles to display
}

const NewsList: React.FC<NewsListProps> = ({ articles }) => {
  return (
    <div className={styles.newsContainer}>
      {/* Show a message if no news articles are available */}
      {articles.length === 0 ? (
        <div className={styles.noResults}>No news found.</div>
      ) : (
        articles.map((article, index) => (
          <div key={index} className={styles.newsCard}>
            {/* Display the news image if available */}
            {article.urlToImage && <img src={article.urlToImage} alt="news" />}
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            {/* Open the article link in a new tab */}
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default NewsList;
