import React, { useState } from 'react';
import styles from '../styles/NewsSearch.module.scss';


interface NewsSearchProps {
  onSearch: (query: string) => void; // Function to handle search query submission
}

const NewsSearch: React.FC<NewsSearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState(''); // State to store user input for search

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query); // Trigger search only if input is not empty
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(); // Trigger search on pressing Enter
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search for news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update search query state on input change
        onKeyDown={handleKeyDown} // Listen for Enter key press
        className={styles.searchInput}
      />
      <button onClick={handleSearch} className={styles.searchButton}>
        Search
      </button>
    </div>
  );
};

export default NewsSearch;
