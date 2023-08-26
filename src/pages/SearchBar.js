import React, { useState } from 'react';
import "./css/SearchBar.css"

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className='SearchContainer'>
      <input
        type="text"
        placeholder="Enter name of medication..."
        value={searchQuery}
        onChange={handleInputChange}
        style={{ marginRight: "15px" }}
      />
      <button className='SearchContainerButton' onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
