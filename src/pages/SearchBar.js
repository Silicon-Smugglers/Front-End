import React, { useState } from 'react';
import axios from 'axios';
import "./css/SearchBar.css"
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: "10px",
    height: "80vh",
    width: "80vw",
    padding: "0" 
  },
};

const SearchBar = ({ searchQuery, setSearchQuery, onSearch, finishedCart }) => {
  // const [searchQuery, setSearchQuery] = useState('');
  const [modalIsOpen, setIsOpen] = React.useState(false);

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


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='SearchContainer'>
      <input
        type="text"
        placeholder="Enter name of medication..."
        value={searchQuery}
        onChange={handleInputChange}
        style={{ marginRight: "15px" }}
        />
        <button className='SearchContainerButton' onClick={() => {handleFinish(); openModal();}}>Finish</button>
      {/* <button className='SearchContainerButton' onClick={handleSearch}>Search</button> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='results'>
          <div className='header'>
            <h2>Results</h2>

          </div>

          <div style={{ display: "flex", flexDirection: "row", alignContent: "center", width: "98%",  placeContent: "space-evenly"}}>
              <div style={{ width:"60%" }}>
                <div className='known-issues'>
                  <h2>Known Issues</h2>
                </div>
                <div className='potential-risks'>
                  <h2>Potential Risks</h2>
                </div>
              </div>
             <div className="severity"> <h2>Severity</h2> </div>

          </div>

            <button onClick={closeModal} className='SearchContainerButton'>close</button>

        </div>
        
      </Modal>
    </div>
  );
};

export default SearchBar;
