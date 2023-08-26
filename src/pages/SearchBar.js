import React, { useState } from 'react';
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

const SearchBar = ({ searchQuery, setSearchQuery, onSearch }) => {
  // const [searchQuery, setSearchQuery] = useState('');
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
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
      {/* <button className='SearchContainerButton' onClick={handleSearch}>Search</button> */}
      <button className='SearchContainerButton' onClick={openModal}>Finish</button>
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
            <div className='known-issues'>
              <h2>Known Issues</h2>
            </div>
            <div className='potential-risks'>
              <h2>Potential Risks</h2>
            </div>
            <button onClick={closeModal} className='SearchContainerButton'>close</button>

        </div>
        
      </Modal>
    </div>
  );
};

export default SearchBar;
