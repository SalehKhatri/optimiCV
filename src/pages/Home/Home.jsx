import React from "react";
import { motion } from "framer-motion";
import './Home.css';
import Testinomials from "../../components/Testinomials";

const Home = () => {
  return (
    <div className="flex flex-col items-center h-[100dvh] w-[100%] bg-gradient-to-b from-[#7693ef] to-[#7dfccf] via-[#78b1e6]">
      <div className="triangle"></div>

      <div className="z-10 mt-24 flex flex-col items-center md:w-[100%] px-4 text-center">
        <motion.h1
          className="uppercase font-Bebas-Neue text-5xl md:w-[100%] lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          ARE YOU STRUGGLING TO GET SHORTLISTED?
        </motion.h1>

        <motion.p
          className="font-LemonMilk font-medium mt-4 text-[10px] px-2 leading-snug md:leading-none md:text-lg md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          Did you know that making a custom CV for each job can boost your chances by 87%? But who has time to make hundreds of CVs every month?
        </motion.p>

        <motion.p
          className="font-LemonMilk font-medium mt-3 text-[10px] px-2 leading-snug md:text-lg md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          Don&apos;t worry! With OptimiCV, you can create a custom CV for any job in just a few seconds. Now you can focus on the quantity of applications, we&apos;ll handle the quality!
        </motion.p>

        <motion.button
          className="font-LemonMilk font-medium mt-5 text-sm md:text-lg md:mt-12 bg-black py-2 px-4 rounded-lg text-[#78afe6]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
        >
          Optimise My Resume
        </motion.button>
      </div>

      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay:1.2, ease: "easeOut" }}
      className="z-10 mt-7 flex flex-col items-center md:w-[100%] px-4 text-center space-y-2">
        <p
          className="uppercase font-Bebas-Neue text-3xl md:text-5xl md:w-[100%] lg:text-7xl"
        >
          OUR USERS SAY THAT:
        </p>
        <Testinomials />
      </motion.div>
    </div>
  );
};

export default Home;
