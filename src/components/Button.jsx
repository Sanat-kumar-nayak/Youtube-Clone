import React from "react";

const Button = ({ name }) => {
  return (
    <div className="bg-gray-300 rounded-lg px-4 py-1 h-[100%] items-center flex">
      <button>{name}</button>
    </div>
  );
};

export default Button;
