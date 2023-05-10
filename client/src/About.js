import React from "react";
import aboutPageBackground from "./data/pictures/aboutPageBackground.png";

export default function About() {
  return (
    <div className="aboutpage">
      <div className="about">About Us</div>
      <div
        className="aboutContent"
        style={{
          backgroundImage: `url(${aboutPageBackground})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <p>
          We are a car sharing company located in Vancouver B.C. We bring
          together car owners with customers in need of a vehicle with our easy
          and convenient app.
        </p>
        <p>
          Whether its an SUV for a family road trip, a pickup truck for some
          errands, or a classic sports car for a special night out, find the
          perfect car for all kinds of occasions and budgets on
        </p>
        <p class="compname">Just Take my Car.</p>
        <p>
          We offer the flexibility to users to rent any type of car from
          locations across Vancouver and to owners who would like to earn an
          additional income at their convenience. Owners can post cars for rent
          and determine their own rates and availability. Customers can view a
          large selection of cars to rent and reserve them for a time of their
          choosing at a convenient pick up an drop off locations.
          <br></br>
          <br></br>
        </p>
      </div>
    </div>
  );
}
