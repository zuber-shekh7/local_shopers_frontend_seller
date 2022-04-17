import React from "react";

const Textarea = ({ className, ...rest }) => {
  return (
    <textarea
      className={`className="p-2 rounded-lg border focus:ring-indigo-600 focus:ring-0 ${className}`}
      {...rest}
    ></textarea>
  );
};

export default Textarea;
