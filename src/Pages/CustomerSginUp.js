import React, { useState } from "react";
import TextInput from "./components/TextInput";
import axios from "axios";
export const CustomerSginUp = () => {
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
        role: "customer",
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            First Name
            <TextInput
              name="firstName"
              value={formData.firstName}
              handleChange={handleChange}
            />
          </div>
          <div className="col-6">
            {" "}
            Last Name
            <TextInput
              name="lastName"
              value={formData.lastName}
              handleChange={handleChange}
            />
          </div>

          <div className="col-6">
            {" "}
            Phone Number
            <TextInput
              name="email"
              value={formData.email}
              handleChange={handleChange}
            />
          </div>
          <div className="col-6">
            {" "}
            E - Mail
            <TextInput
              name="phoneNumber"
              value={formData.phoneNumber}
              handleChange={handleChange}
            />
          </div>
          <div className="col-md-6 offset-md-3">
            {" "}
            Password
            <TextInput
              name="password"
              type="password"
              value={formData.password}
              handleChange={handleChange}
            />
          </div>
          <div className="col-md-6 offset-md-3">
            {" "}
            Conform Password
            <TextInput
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              handleChange={handleChange}
            />
          </div>
        </div>
        <div className="col-12 d-flex justify-content-end">
          <button onClick={register}> Sign Up</button>
        </div>
      </div>
    </div>
  );
};
