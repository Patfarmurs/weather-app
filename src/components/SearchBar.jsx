import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ city, setCity, onSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search for a city..."
          className="search-input"
        />
        <button onClick={onSearch} className="search-button">
          <Search color="white" size={24} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;