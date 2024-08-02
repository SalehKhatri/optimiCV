import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    content: "OptimiCV made CV creation quick and easy!",
    author: "Alex M.",
    image:
      "https://media.istockphoto.com/id/1132792394/photo/headshot-of-a-young-adult.webp?b=1&s=170667a&w=0&k=20&c=KfJg-kHVWlAt-2AmgpX7dA04z9sXt1ikcIW2u601Pig=",
  },
  {
    id: 2,
    content: "I got more interviews thanks to tailored CVs from OptimiCV.",
    author: "Jordan P.",
    image:
      "  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeG1jausYBgHebFtAQzx8uB_S0gSAWBd9-YA&s",
  },
  {
    id: 3,
    content: "OptimiCV saved me hours and improved my job applications.",
    author: "Taylor R.",
    image:
      "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
  },
  {
    id: 4,
    content: "OptimiCV helped me get shortlisted for multiple positions.",
    author: "Morgan S.",
    image:
      "https://media.istockphoto.com/id/507480872/photo/portrait-of-a-mature-man-smiling-at-the-camera.jpg?s=2048x2048&w=is&k=20&c=_EWh-MQQNoPinSpwL8dKv8LwpoJKENarRDY3NeheMD0=",
  },
];

const Testinomials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // Default direction

  const prevSlide = () => {
    setDirection(-1); // Move left
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setDirection(1); // Move right
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1); // Determine direction based on index
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full flex flex-col items-center mx-auto mt-16 pb-5 bg-inherit">
      <p className="font-LemonMilk font-medium text-xs md:text-base">
        &#x2022; Testimonials &#x2022;
      </p>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: direction * 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            borderTopLeftRadius: "25px 12px",
            borderTopRightRadius: "25px 12px",
            borderBottomLeftRadius: "25px 12px",
            borderBottomRightRadius: "25px 12px",
          }}
          className="relative flex flex-col justify-center items-center bg-white bg-opacity-70 border border-black rounded-lg shadow-xl drop-shadow-md px-6 py-3 mt-3 max-w-[90%] w-[300px] md:w-[400px]"
        >
          <div className="absolute -top-4 -left-[10px] w-14 h-14 rounded-full border border-black bg-white bg-opacity-50 overflow-hidden">
            <img
              src={testimonials[currentIndex].image}
              alt="testimonial"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pt-8 pb-2">
            <p className="text-center font-semibold text-xs">
              {testimonials[currentIndex].content}
            </p>
            <p className="text-right mt-2 font-LemonMilk text-slate-500 text-xs">
              - {testimonials[currentIndex].author}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        className="absolute -left-[8%] md:left-0 lg:left-[25%] top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-60 ring-1 ring-gray-600 rounded-full shadow-lg focus:outline-none"
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-2 h-2 md:w-3 md:h-3 lg:w-5 lg:h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        className="absolute -right-[8%] md:right-0 lg:right-[25%] top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-60 ring-1 ring-gray-600 rounded-full shadow-lg focus:outline-none"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-2 h-2 md:w-3 md:h-3 lg:w-5 lg:h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="flex justify-center mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              currentIndex === index
                ? "transition-transform duration-150 ease-out bg-transparent border-[2px] border-white ring-[1px] ring-black transform -translate-y-[8px]"
                : "bg-white border-[0.25px] border-black"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testinomials;
