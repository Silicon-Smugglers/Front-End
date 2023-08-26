import React from "react";
import "./css/home.css"
import { ColorChangingButton } from "../Components/ColourChangingButton";
const Home = () => {

  return (
      <>
      <div className = "flex flex-col justify-center items-center h-screen">
        <img src={"../../pill_image.svg" } alt="" className="mb-4 max-w-full h-auto max-h-48" />

        <h1 
          className= "mb-4 text-4xl font-extrabold leading-none tracking-tight bg-center text-gray-900 md:text-5xl lg:text-6xl dark:text-black">Place Holder
        </h1> 

        <p className="text-lg font-bold text-center mb-4" >
          Know the effects of multiple drugs on your body
        </p>
        <div className="flex gap-4">
          <ColorChangingButton className= "hover:bg-red-500">Log In</ColorChangingButton>
          <ColorChangingButton className= "hover:bg-red-500">Sign Up</ColorChangingButton>
        </div>
      </div>  
      </>
  );
};

export default Home;
