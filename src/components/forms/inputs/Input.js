import React from "react";

const Input = ({ className, ...rest }) => {
  return (
    <input
      className={`className="p-2 rounded-lg border focus:ring-indigo-600 focus:ring-0 ${className}`}
      {...rest}
    />
  );
};

export default Input;
