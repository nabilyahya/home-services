import React from "react";
import "./style.css";
import SelectInput from "./SelectInput";
export const ServiceDetilesHeroSection = () => {
  return (
    <div>
      {" "}
      <div className="service-hero-section" style={{ color: "black" }}>
        <h1>Welcome to Ur-Services</h1>
        <p>Find the best services tailored for you!</p>
        <div className="row" style={{ width: "100%" }}>
          <div className="col-4">
            <SelectInput />
          </div>
          <div className="col-4">
            <SelectInput />
          </div>
          <div className="col-4">
            <SelectInput />
          </div>
        </div>
        <div style={{ color: "black", fontSize: "20px" }}>
          Room Size <br />
          Room
          <br /> Count Time
          <br /> Price
        </div>
        <button
          style={{
            borderRadius: "10px",
            border: "none",
            padding: "10px 40px ",
          }}
        >
          Purch
        </button>
        {/* Add more content or a call-to-action button if needed */}
      </div>
    </div>
  );
};
