import React from "react";
import Container from "../Container";
import { FaSearch } from "react-icons/fa";

export default function NavbarTop() {
  return (
    <nav className="bg-white w-full sm:max-w-sm -sm:w-full fixed z-10 border-b">
      <Container className="py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="/images/quranify-logo.png"
              alt="Quranify Logo"
              className="w-9 h-9"
            />
            <h1 className="font-bold text-md text-purple-700">Quranify</h1>
          </div>
          <button>
            <FaSearch className="text-xl text-gray-400" />
          </button>
        </div>
      </Container>
    </nav>
  );
}
