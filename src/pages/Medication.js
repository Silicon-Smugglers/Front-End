import React, { useState } from 'react';
import SearchBar from './SearchBar';
import './css/Compare.css'; // Import your custom CSS for styling
import './css/SearchBar.css'

const Medication = () => {
  const drugData = [
    'Aspirin',
    'Ibuprofen',
    'Acetaminophen',
    'Lisinopril',
    'Simvastatin',
    'Metformin',
    'Valproic Acid',
    'Benzodiazepines',
    'Tylenol',
    'Vitamin K',
    'Warfarin',
    'Oral Contraceptives',
    'NSAIDs'
    // Add more drug names as needed
  ];

  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState('');



  // Define the handleSearch function
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className='CompareContainer'>
      <div className='MainContent'>
      <h1>All Medications</h1>

        {/* Render the SearchBar component and pass the handleSearch function */}
        <SearchBar onSearch={handleSearch} />

        {/* Display all drugs from the list as horizontally arranged square tiles */}
        <div className='CompareContent'>
          <div className="tile-container">
            {drugData.map((drug, index) => (
              // Conditionally render only the matching tile based on the search query
              drug.toLowerCase().includes(searchQuery.toLowerCase()) && (
                <div
                  className="square-tile"
                  key={index}>
                  <div className="tile-content">
                    <h5 className="tile-title">{drug}</h5>
                    {/* Additional drug information or actions can be added here */}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};

export default Medication;
