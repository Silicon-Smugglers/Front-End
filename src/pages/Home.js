import React, { useRef } from "react";
import "./css/home.css"
import { useScroll, useTransform, motion} from "framer-motion";
import { ColorChangingButton } from "../components/ColourChangingButton";
const Home = () => {
  const targetRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: targetRef, 
    offset: ["start end", "end end"] 
  });
  
  {/*Difficult to fix opacity, leave as it is*/}
  const opacity = useTransform(scrollYProgress, [0, 100], [1, 1]);

  return ( 
      <div  
      className = "relative overflow-y-auto h-screen">
      <motion.div ref={targetRef}
      className = "flex flex-col justify-center items-center h-screen"
      >
        <img src={"../../pill_image.svg" } alt="" className="mb-4 max-w-full h-auto max-h-48" />

        <h1 className= "mb-4 text-4xl font-extrabold leading-none tracking-tight bg-center text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
          Horus
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
        </motion.div>  

        <div className=" ablsolute top-0 left-0 h-5/6 w-5/6 bg-red-500 shadow-xl transform rotate-3 origin-left justify-center items-center flex flex-col"
        style={{ marginLeft: "-2%", left: '%' }} // Adjust the left positioning here>
       ><h1 className= "mb-4 text-4xl font-extrabold leading-none tracking-tight bg-center text-gray-0 md:text-5xl lg:text-6xl dark:text-white"
        >
          Motivation
          </h1>
          <div className="flex flex-col items-center">
          <p className="mr-4 mb-4 text-center w-1/2">
            There is no denying that heath complication are a part of everyone lives in some form or another. Often we rely on medication and other drugs,
            taking mutiple at times to aid these health complications. Although, we know these medication are designed to help us, we are often unaware of they work when they 
            have entered our both and how they interract with each other when taking more than 1 at a time. For example, how panadol and asprin would interact when you have a cold. 
            Do they both help, do they end up neturalising each and they are not effective anyone, or does it end up casung harm?
          </p>
          </div>
          <div className="flex items-center">
          <img src={"../../flat_pill.svg" } alt="" className="max-w-full h-auto max-h-64" />
          <img src={"../../beer.svg" } alt="" className="max-w-full h-auto max-h-64" />
          <img src={"../../blue_pill_bottle.svg" } alt="" className="max-w-full h-auto max-h-64" />
          </div>
        </div>

        <div className="absolute left-0 h-full w-full flex flex-col items-center justify-center">
        <div className=" h-1/2 w-full flex justify-center items-end">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight bg-center text-gray-900 md:text-5xl lg:text-6xl dark:text-black"
          >
            Solution
          </h1>

        </div>
        <div
            className="h-1/2 align-bottom w-full bg-red-500 text-center  justify-center flex flex-col"
            style={{bottom: "-2rem"}}
            >
            <p className="font-extrabold text-gray-50 dark:text-white">
              Hence, the solution. This website help you to choose and compare 2 drugs giving you information about how the drugs will affect each other, 
              and how they affect you.          
               </p>
            <div className="flex justify-center text-center" >
              
            <img src={"../../blood.svg" } alt="" className="max-w-full h-auto max-h-64" />
            <img src={"../../pill_bottle.svg" } alt="" className="max-w-full h-auto max-h-64" />
            </div>
        </div>
      </div>
      </div>
  );
};

export default Home;
