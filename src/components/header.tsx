import React from "react";
import Weather from "./weather";

export default function Header() {
  return (
    <div className="header">
      <div className="header-wrapper">
        <p className="header-greeting">Good Morning, Benoît</p>
        <div className="header-underline" />
      </div>

      <Weather />
    </div>
  );
}
