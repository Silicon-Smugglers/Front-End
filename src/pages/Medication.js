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
    <div className="rightbar">
          <h2 style={{ borderBottom: "1px black solid", marginBottom: "10px"}}>Filters</h2>
          <FilterBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
          
      </div>
      <div className='MainContent'>
      <h1>All Medications</h1>

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


const FilterBar = ({searchQuery, setSearchQuery}) => {

  const handleInputChange = (e) => {
      setSearchQuery(e.target.value);
  };

  const [checkboxStatus, setCheckboxStatus] = useState({
  "oral": false, 
  "intraveneous": false, 
  "subcutaneous": false, 
  "nasal": false, 
  "topical": false});

  return (
    <div className='FilterBar'>
      <input onChange={handleInputChange} value={searchQuery} style={{ marginBottom: "10px"}}/>
      <h2 style={{ borderBottom: "1px black solid", marginBottom: "10px"}}>Pathways</h2>
      <Checkbox text="Oral" value="oral" checkboxStatus={checkboxStatus} setCheckboxStatus={setCheckboxStatus}/>
      <Checkbox text="Intravaneous" value="intravaneous"  checkboxStatus={checkboxStatus} setCheckboxStatus={setCheckboxStatus}/>
      <Checkbox text="Subcutaneous" value="subcutaneous"  checkboxStatus={checkboxStatus} setCheckboxStatus={setCheckboxStatus}/>
      <Checkbox text="Nasal" value="nasal"  checkboxStatus={checkboxStatus} setCheckboxStatus={setCheckboxStatus}/>
      <Checkbox text="Topical" value="topical" checkboxStatus={checkboxStatus} setCheckboxStatus={setCheckboxStatus}/>
      <button className='SearchContainerButton' style={{ marginTop: "10px" }}>Reset</button>
      
    </div>
  )
}


const Checkbox = ({text, value, checkboxStatus, setCheckboxStatus}) => {

  const handleInputChange = (e) => {
      let newStatus = checkboxStatus;
      if(e.target.value === "on") {
        newStatus[value] = true 

      } else {
        newStatus[value] = false 

      }
      console.log(newStatus, value);
      setCheckboxStatus(newStatus);
  };

  return (
    <div className='checkbox'>
      <input type="checkbox" checked={checkboxStatus[value]} onChange={handleInputChange} style={{ marginRight: "10px", marginTop: "0.3em" }}/>
      {text}

    </div>
  );

}

export default Medication;
