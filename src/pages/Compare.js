import React, { useState } from 'react';
import SearchBar from './SearchBar';

const Compare = () => {
  const drugData = [
    'Aspirin',
    'Ibuprofen',
    'Acetaminophen',
    'Lisinopril',
    'Simvastatin',
    'Metformin',
    // Add more drug names as needed
  ];

  // State to hold the search results
  const [searchResults, setSearchResults] = useState([]);

  // Define the search logic function
  const yourSearchLogic = (query) => {
    return drugData.filter((drug) =>
      drug.toLowerCase().includes(query.toLowerCase())
    );
  };

  // Define the handleSearch function
  const handleSearch = (query) => {
    const filteredResults = yourSearchLogic(query);
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <h1>Drug Comparison</h1>

      {/* Render the SearchBar component and pass the handleSearch function */}
      <SearchBar onSearch={handleSearch} />

      {/* Display search results */}
      <div>
        <h2>Search Results:</h2>
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Compare;
