import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ city, setCity, onSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="max-w-2xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search for a city..."
          className="w-full px-6 py-4 rounded-2xl bg-white/20 backdrop-blur-md text-white placeholder-white/60 outline-none border-2 border-white/30 focus:border-white/60 transition-all text-lg"
        />
        <button
          onClick={onSearch}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/40 backdrop-blur-md p-3 rounded-xl transition-all"
        >
          <Search className="text-white" size={24} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;