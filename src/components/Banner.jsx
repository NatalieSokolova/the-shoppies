import React from "react";
import border from "../assets/the_shopies_underline-01.png";

export default function Banner() {
  return (
    <div>
      <br />
      <h1>Thank you for your nominations!</h1>
      <img src={border} alt="border" className="border" />
    </div>
  );
}
