import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import './css/Compare.css'; // Import your custom CSS for styling
import './css/SearchBar.css'

const Compare = () => {
    const [allDrugs, setAllDrugs] = useState([]);

    useEffect(() => {
        fetch('/list').then(res => res.json()).then(data => {
            setAllDrugs(data);
        });
    }, []);

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
        <div className='scroll'>

        {/* Render the SearchBar component and pass the handleSearch function */}
        <SearchBar onSearch={handleSearch} searchQuery={searchQuery} setSearchQuery={setSearchQuery} finishedCart={cart}/>

        {/* Display all drugs from the list as horizontally arranged square tiles */}
        <div className='CompareContent'>
        <div className="tile-container">
        {allDrugs.map((drug, index) => (
            // Conditionally render only the matching tile based on the search query
            drug[1].name.toLowerCase().includes(searchQuery.toLowerCase()) && (
                <div
                className="square-tile"
                key={drug[0]}
                onClick={() => addToCart(drug)} // Add this onClick handler
                >
                <div className="tile-content">
                <h5 className="tile-title">{drug[1].name}</h5>
                {/* Additional drug information or actions can be added here */}
                </div>
                </div>
            )
        ))}
        </div>
        </div>


        </div>
        </div>

        {/* Move the cart to the right side */}
        <div className="sidebar">
        <h2 style={{ borderBottom: "1px black solid", marginBottom: "10px"}}>Prescriptions</h2>
        {cart.map((item, index) => (
            <div key={index[0]} className="cart-item">
            <div className="cart-content">
            <span>{item[1].name}</span>
            <button onClick={() => removeFromCart(item)} className="remove-button" style={{ fontSize: '10px' }}>
            ❌{/* Cross emoji */}
            </button>
            </div>
            </div>
        ))}
        </div>
        </div>
    );
};

export default Compare;
