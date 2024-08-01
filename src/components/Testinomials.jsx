import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    content: "Testimonial 1 content goes here...",
    author: "Author 1",
  },
  {
    id: 2,
    content: "Testimonial 2 content goes here...",
    author: "Author 2",
  },
  {
    id: 3,
    content: "Testimonial 3 content goes here...",
    author: "Author 3",
  },
  {
    id: 4,
    content: "Testimonial 4 content goes here...",
    author: "Author 4",
  },
];

const Testinomials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index =
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full flex flex-col items-center  mx-auto mt-16 bg-inherit">
      <p className="font-LemonMilk font-medium">
        &#x2022; Testimonials &#x2022;
      </p>
      <div
        style={{
          borderTopLeftRadius: "25px 12px",
          borderTopRightRadius: "25px 12px",
          borderBottomLeftRadius: "25px 12px",
          borderBottomRightRadius: "25px 12px",
        }}
        className="relative bg-white bg-opacity-70 border  border-black rounded-lg shadow-lg p-6 mt-3 max-w-[90%] w-[300px]"
      >
        <div className="absolute -top-4 -left-[10px] circle w-14 h-14 rounded-[100%] border border-black bg-white bg-opacity-50"></div>
        <p className="text-center">{testimonials[currentIndex].content}</p>
        <p className="text-right mt-4">- {testimonials[currentIndex].author}</p>
      </div>

      <button
        className="absolute -left-[8%] md:left-0  top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-60 ring-1 ring-gray-600 rounded-full shadow-lg focus:outline-none"
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-4 h-4"
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
        className="absolute -right-[8%]  md:right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-60 ring-1 ring-gray-600 rounded-full shadow-lg focus:outline-none"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-4 h-4"
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
            className={`w-3 h-3 mx-1 rounded-full ${
              currentIndex === index
                ? "transition-transform duration-150 ease-out bg-transparent border-[3px] border-white ring-[1px] ring-black transform -translate-y-[8px]"
                : "bg-white border-[0.5px] border-black"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testinomials;
