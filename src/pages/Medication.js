import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import './css/Compare.css'; // Import your custom CSS for styling
import './css/SearchBar.css'



const Medication = () => {
    const [allDrugs, setAllDrugs] = useState([]);
    const [filteredDrugs, setFilteredDrugs] = useState([]);

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


    // Define the handleSearch function
    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    
    return (
        <div className='CompareContainer'>
        <div className="rightbar">
        <h2 style={{ borderBottom: "1px black solid", marginBottom: "10px"}}>Filters</h2>
        <FilterBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} allDrugs={allDrugs} setFilteredDrugs={setFilteredDrugs}/>

        </div>
        <div className='MainContent'>
        <h1>All Medications</h1>

        {/* Display all drugs from the list as horizontally arranged square tiles */}
        <div className='CompareContent'>
        <div className="tile-container">
        {allDrugs.map((drug, index) => (
            // Conditionally render only the matching tile based on the search query
            drug[1].name.toLowerCase().includes(searchQuery.toLowerCase()) && (
                <div
                className="square-tile"
                key={drug[0]}>
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
    );
};


const FilterBar = ({ searchQuery, setSearchQuery, allDrugs, setFilteredDrugs }) => {
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const [checkboxStatus, setCheckboxStatus] = useState({
        "oral": false,
        "intraveneous": false,
        "subcutaneous": false,
        "nasal": false,
        "topical": false
    });

    const getFilteredDrugs = () => {

        const newDrugs = [];
        for(let i = 0; i < allDrugs.length; i++) {
            for(let j = 0; j < allDrugs[i][1]['routes'].length; j++) {
                if (checkboxStatus[allDrugs[i][1]['routes'][j]]) {
                    newDrugs.push(allDrugs[i]);
                    console.log(allDrugs[i][1], allDrugs[i][1]['routes']);
                    break;
                }
            }
        }
        setFilteredDrugs(newDrugs);
    }


    const handleResetFilters = () => {
        // Create a copy of the checkboxStatus object with all filters set to false
        const resetStatus = Object.fromEntries(
            Object.keys(checkboxStatus).map((key) => [key, false])
        );
        // Update the checkboxStatus state to reset all filters
        setCheckboxStatus(resetStatus);
    };

    return (
        <div className='FilterBar'>
        <input onChange={handleInputChange} value={searchQuery} style={{ marginBottom: "10px" }} />
        <h2 style={{ borderBottom: "1px black solid", marginBottom: "10px" }}>Pathways</h2>
        <Checkbox text="Oral" value="oral" checkboxStatus={checkboxStatus} setCheckboxStatus={setCheckboxStatus} getFilteredDrugs={getFilteredDrugs}/>
        <Checkbox text="Intravaneous" value="intravaneous" checkboxStatus={checkboxStatus} setCheckboxStatus={setCheckboxStatus} getFilteredDrugs={getFilteredDrugs} />
        <Checkbox text="Subcutaneous" value="subcutaneous" checkboxStatus={checkboxStatus} setCheckboxStatus={setCheckboxStatus} getFilteredDrugs={getFilteredDrugs} />
        <Checkbox text="Nasal" value="nasal" checkboxStatus={checkboxStatus} setCheckboxStatus={setCheckboxStatus} getFilteredDrugs={getFilteredDrugs} />
        <Checkbox text="Topical" value="topical" checkboxStatus={checkboxStatus} setCheckboxStatus={setCheckboxStatus} getFilteredDrugs={getFilteredDrugs} />
        <button className='SearchContainerButton' style={{ marginTop: "10px" }} onClick={handleResetFilters}>Reset</button>
        </div>
    );
};



const Checkbox = ({ text, value, checkboxStatus, setCheckboxStatus, getFilteredDrugs }) => {
    const handleInputChange = (e) => {
        const newStatus = { ...checkboxStatus }; // Create a copy of the checkboxStatus object

        // Update the value based on whether the checkbox is checked or unchecked
        newStatus[value] = e.target.checked;

        // Update the checkboxStatus state
        setCheckboxStatus(newStatus);
        getFilteredDrugs();
    };

    return (
        <div className="checkbox">
        <input
        type="checkbox"
        checked={checkboxStatus[value]}
        onChange={handleInputChange}
        style={{ marginRight: "10px", marginTop: "0.3em" }}
        />
        {text}
        </div>
    );
};

export default Medication;
