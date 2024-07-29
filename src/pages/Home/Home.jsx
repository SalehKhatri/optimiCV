import React from "react";
import './Home.css'
const Home = () => {
  return (
      <div className="flex justify-center h-[100vh] w-[100%] bg-gradient-to-b from-[#7693ef] to-[#7dfccf] via-[#78b1e6]">
        <div className="triangle"></div>
        <div className="z-10 mt-28 flex flex-col items-center md:w-[100%] px-3 text-center">
          <h1 className="uppercase font-Bebas-Neue text-5xl md:w-[100%]  lg:text-7xl ">ARE YOU STRUGGLING TO GET SHORTLISTED?</h1>
          <p className="font-LemonMilk font-medium mt-4 text-sm md:text-lg md:mt-12">Did you know that making a custom CV for each job can boost your chances by 87%? But who has time to make hundreds of CVs every month?</p>
          <p className="font-LemonMilk font-medium mt-4 text-sm md:text-lg md:mt-12">Don&apos;t worry! With OptimiCV, you can create a custom CV for any job in just a few seconds. Now you can focus on the quantity of applications, we&apos;ll handle the quality!</p>

          <button className="font-LemonMilk font-medium mt-6 text-sm md:text-lg md:mt-12 bg-black py-3 px-4 rounded-lg text-[#78afe6] hover:scale-105 transition-all duration-300 ease-in">Optimise My Resume</button>
        </div>
      </div>
  );
};

export default Home;
