import React from "react";
import "./css/home.css"
import { ColorChangingButton } from "../components/ColourChangingButton";
const Home = () => {

  return (
      <div className = "relative overflow-y-auto h-screen">
      <div className = "flex flex-col justify-center items-center h-screen">
        <img src={"../../pill_image.svg" } alt="" className="mb-4 max-w-full h-auto max-h-48" />

        <h1 className= "mb-4 text-4xl font-extrabold leading-none tracking-tight bg-center text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
          Pill Safe
        </h1> 

        <p className="text-lg font-bold text-center mb-4" >
          Know your drugs relative to each other and you body
        </p>
        <div className="flex gap-4">
          <ColorChangingButton className= "hover:bg-red-500">
            Log In
          </ColorChangingButton>
          <ColorChangingButton className= "hover:bg-red-500">
            Sign Up
          </ColorChangingButton>
        </div>
        </div>  
        <div className=" ablsolute top-0 left-0 h-5/6 w-5/6 bg-red-500 shadow-xl transform rotate-3 origin-left justify-center items-center flex flex-col"
        style={{ marginLeft: "-2%", left: '%' }} // Adjust the left positioning here>
       ><h1 className= "mb-4 text-4xl font-extrabold leading-none tracking-tight bg-center text-gray-0 md:text-5xl lg:text-6xl dark:text-white"
        >
          Hello
          </h1>
          <div className="flex flex-col items-center">
          <p className="mr-4 mb-4 text-center w-1/2">
            This is your paragraph, this is a bunch of gebberish that needs to be change. Strictly for testing purposes.
          </p>
          </div>
          <div className="flex items-center">
          <img src={"../../flat_pill.svg" } alt="" className="max-w-full h-auto max-h-64" />
          <img src={"../../pill_bottle.svg" } alt="" className="max-w-full h-auto max-h-64" />
          <img src={"../../blue_pill_bottle.svg" } alt="" className="max-w-full h-auto max-h-64" />
          </div>
        </div>
      </div>
  );
};

export default Home;
