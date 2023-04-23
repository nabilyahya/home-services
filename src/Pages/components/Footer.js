import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        position: "sticky",
        bottom: 0,
        width: "100%",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-md-12 d-flex justify-content-center align-items-center"
            style={{ height: "100px" }}
          >
            Links or other content can go here.
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-12 text-center"
            style={{ paddingBottom: "10px" }}
          >
            © 2023 Ur-Services. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
