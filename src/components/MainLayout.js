import React from "react";
import NavbarBottom from "./NavbarBottom";
import NavbarTop from "./NavbarTop";

export default function MainLayout({ children }) {
  return (
    <main className="sm:max-w-sm -sm:w-full min-h-screen flex flex-col mx-auto font-poppins overflow-x-hidden shadow-xl">
      <NavbarTop />
      {children}
      <NavbarBottom />
    </main>
  );
}
