import React, { useState } from "react";
import TextInput from "./components/TextInput";
import SelectInput from "./components/SelectInput";
import axios from "axios";
export const WorkerSginUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const register = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/register", {
        ...formData,
        role: "worker",
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {" "}
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
          <SelectInput />
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
