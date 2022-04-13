import React from "react";

const Card = ({ className, children, ...rest }) => {
  return (
    <div className={`px-3 py-4 border rounded-lg ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Card;
