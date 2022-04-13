import React from "react";

const CircleButton = ({ onClick, className, children, ...rest }) => {
  return (
    <button
      className={`bg-white text-indigo-600 p-2 rounded-full ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CircleButton;
