import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";

import SginUp from "./Pages/SginUp";
import { WorkerSginUp } from "./Pages/WorkerSginUp";
import { CustomerSginUp } from "./Pages/CustomerSginUp";
import { HomePage } from "./Pages/HomePage";
import { AboutUs } from "./Pages/AboutUs";
import Footer from "./Pages/components/Footer";
function App() {
  const [isSginUpOpen, setIsSginUpOpen] = useState(false);
  return (
    <Router className="main-content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Ur-Services
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link to="/" class="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/AoutUs" class="nav-link">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/SginUp" class="nav-link">
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AoutUs" element={<AboutUs />} />
        <Route
          path="/SginUp"
          element={<SginUp setIsSginUpOpen={setIsSginUpOpen} />}
        />
        <Route path="/WorkerSginUp" element={<WorkerSginUp />} />
        <Route path="/CustomerSginUp" element={<CustomerSginUp />} />
      </Routes>
      {!isSginUpOpen && <Footer />}
    </Router>
  );
}

export default App;
