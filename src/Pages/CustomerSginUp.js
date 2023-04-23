import React from "react";
import TextInput from "./components/TextInput";

export const CustomerSginUp = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            First Name
            <TextInput />
          </div>
          <div className="col-6">
            {" "}
            Last Name
            <TextInput />
          </div>

          <div className="col-6">
            {" "}
            Phone Number
            <TextInput />
          </div>
          <div className="col-6">
            {" "}
            E - Mail
            <TextInput />
          </div>
          <div className="col-md-6 offset-md-3">
            {" "}
            Password
            <TextInput />
          </div>
          <div className="col-md-6 offset-md-3">
            {" "}
            Conform Password
            <TextInput />
          </div>
        </div>
        <div className="col-12 d-flex justify-content-end">
          <button> Sin Up</button>
        </div>
      </div>
    </div>
  );
};
