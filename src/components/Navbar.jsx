import React from "react";
const Navbar = () => {
  return (
    <nav className="fixed z-20 w-full top-0 mx-auto px-4 sm:px-6 lg:px-8 bg-black">
      <div className="flex justify-between h-12 md:h-12 items-center">
        <div className="text-white font-Orbitron font-bold text-2xl">
          <a href="/" className="bg-[rgba(184, 229, 250, 0.5)]">optimiCV</a>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#7693ef"
            className="size-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
