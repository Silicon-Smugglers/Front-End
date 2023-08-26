import React, { useState } from 'react';
import axios from 'axios';
import "./css/SearchBar.css"

const SearchBar = ({ onSearch, finishedCart }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    const handleFinish = () => {
        // Create list of ids from list of (doc.id, doc) tuples
        const idList = finishedCart.map(function(tuple) {
            return tuple[0];
        });
        // send to server to compare
        const data = { 'cart': idList };
        axios.post('/compare', data)
            .then((response) => {
                console.log(response.data);
            }
        );
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
        <button className='SearchContainerButton' onClick={handleFinish}>Finish</button>
        </div>
    );
};

export default SearchBar;
