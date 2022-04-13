import React from "react";

const Error = ({ children, ...rest }) => {
  return (
    <div className="flex justify-center">
      <p className="text-sm text-red-500" {...rest}>
        {children}
      </p>
    </div>
  );
};

Error.defaultProps = {
  children: "Something went wrong. Try again Later.",
};

export default Error;
