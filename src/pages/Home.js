import NavBar from "../components/NavBar";

import React from "react";
import "./css/home.css"
const Home = () => {
  return (
    <div>
      <NavBar />
      <h1>Welcome to the Home Page</h1>
      
      
      {/*Login and Sign Up button*/}
      <div>
      <button className= "button1">Login</button>
      <button className= "button2">Sign Up</button>
      </div>
    </div>
  );
};

export default Home;
