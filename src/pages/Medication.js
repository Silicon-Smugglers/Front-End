import React, { useState } from 'react';
import SearchBar from './SearchBar';
import './css/Medication.css'; // Import your custom CSS for styling
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

  // State to hold the selected drugs in the cart
  const [cart, setCart] = useState([]);

  // State to keep track of clicked tiles
  const [clickedTiles, setClickedTiles] = useState([]);

  // Define the handleSearch function
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Define a function to add a drug to the cart
  const addToCart = (drug) => {
    // Check if the drug is already in the cart
    if (!cart.includes(drug)) {
      // If it's not in the cart, add it
      setCart([...cart, drug]);
      // Update the clickedTiles state to mark this tile as clicked
      setClickedTiles([...clickedTiles, drug]);
    }
  };

  // Define a function to remove a drug from the cart
  const removeFromCart = (item) => {
    const updatedCart = cart.filter((drug) => drug !== item);
    setCart(updatedCart);
  };

  return (
    <div className='CompareContainer'>
      <div className='MainContent'>
      <h1>Drug Comparison</h1>

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
                  key={index}
                  onClick={() => addToCart(drug)} // Add this onClick handler
                >
                  <div className="tile-content">
                    <h5 className="tile-title">{drug}</h5>
                    {/* Additional drug information or actions can be added here */}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        <button className='SearchContainerButton'>Finish</button>

      </div>

      {/* Move the cart to the right side */}
      <div className="sidebar">
          <h2 style={{ borderBottom: "1px black solid", marginBottom: "10px"}}>Prescriptions</h2>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-content">
                <span>{item}</span>
                <button onClick={() => removeFromCart(item)} className="remove-button">
                  🗑️{/* Bin symbol */}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Medication;
