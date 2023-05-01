import React from "react";
import HomePageHeroSection from "./components/HomePageHeroSection";
import HomePageCard from "./components/HomePageCard";
import "./components/homeStyle.css";
import { Link } from "react-router-dom";
export const HomePage = () => {
  return (
    <div>
      <HomePageHeroSection />
      <div className="row home-page-row">
        <div className="col-12 col-md-6 col-lg-4 home-page-col">
          <HomePageCard />
        </div>
        <div className="col-12 col-md-6 col-lg-4 home-page-col">
          <Link to="/ServiceDetiles">
            <HomePageCard />
          </Link>
        </div>
        <div className="col-12 col-md-6 col-lg-4 home-page-col">
          <HomePageCard />
        </div>
      </div>
    </div>
  );
};
