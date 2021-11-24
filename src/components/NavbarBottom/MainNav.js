import React from "react";
import { Link } from "react-router-dom";

export default function MainNav() {
  return (
    <button className="absolute -top-6 -ml-2 w-16 h-16 bg-purple-800 rounded-full shadow-xl flex justify-center">
      <Link to={`/`}>
        <img
          src="/images/quranify-logo.png"
          alt="Quranify Logo"
          className="object-cover object-center"
        />
      </Link>
    </button>
  );
}
