import React, { useState } from 'react';
import SearchBar from './SearchBar';
import './css/Compare.css'; // Import your custom CSS for styling

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

  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState('');

  // State to hold the selected drugs in the cart
  const [cart, setCart] = useState([]);

  // Define the handleSearch function
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Define a function to add a drug to the cart
  const addToCart = (drug) => {
    setCart([...cart, drug]);
  };

  // Define a function to remove a drug from the cart
  const removeFromCart = (item) => {
    const updatedCart = cart.filter((drug) => drug !== item);
    setCart(updatedCart);
  };

  return (
    <div className='CompareContainer'>
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

      {/* Display the cart on the sidebar */}
      <div className="sidebar">
        <h2>Cart</h2>
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <div>{item}</div>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compare;
