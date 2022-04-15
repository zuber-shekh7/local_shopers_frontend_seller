import React from "react";

const ContactUsPage = () => {
  return (
    <main className="container">
      <div className="flex justify-center">
        <div className="text-center flex-1">
          <h1>Contact Us</h1>
          <hr />
          <h4>
            For any query mail us{" "}
            <a className="text-indigo-600" href="mailto:example@gmail.com">
              here
            </a>
          </h4>
        </div>
      </div>
    </main>
  );
};

export default ContactUsPage;
