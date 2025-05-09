import React from "react";

function Button({ children, type = "button", className = "", onClick }) {
  return (
    <button
      type={type}
      className={`bg-green-150 cursor-pointer w-full rounded-[12px] py-4 text-white font-medium lg:text-base font-inter text-base text-center transition duration-300 ease-in-out transform hover:scale-105 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;