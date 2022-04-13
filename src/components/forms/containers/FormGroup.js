import React from "react";

const FormGroup = ({ className, children, ...rest }) => {
  return (
    <div className={`mb-5 ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default FormGroup;
