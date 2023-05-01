import React from "react";
import { useContext } from "react";
import { AuthContext } from "../util/AuthContext";

import { ServiceDetilesHeroSection } from "./components/ServiceDetilesHeroSection";
export const ServiceDetiles = () => {
  const { user, login, logout } = useContext(AuthContext);
  const handleLogin = async () => {
    const email = "admin@home.com";
    const password = "password";
    const success = await login(email, password);

    if (success) {
      console.log("Logged in");
    } else {
      console.log("Login failed");
    }
  };

  const handleLogout = async () => {
    await logout();
    console.log("Logged out");
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Hello, {user.name}</h1>
          <button onClick={handleLogout}>Logout</button>
          <ServiceDetilesHeroSection />
        </div>
      ) : (
        <div>
          <h1>Please log in</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
      {/**
    <ServiceDetilesHeroSection />
  */}
    </div>
  );
};
export default ServiceDetiles;
