import React from "react";
import Container from "../Container";
import { FaQuran, FaInfoCircle, FaCog } from "react-icons/fa";
import { SiAudioboom } from "react-icons/si";
import NavLink from "./NavLink";
import MainNav from "./MainNav";

export default function NavbarBottom() {
  return (
    <div className="bg-white w-full sm:max-w-sm -sm:w-full fixed bottom-0 border-t">
      <Container className="py-1">
        <ul className="flex justify-between items-center">
          <NavLink name="Qpedia" link="/quranpedia" icon={<FaQuran />} />
          <NavLink name="Qaudio" icon={<SiAudioboom />} />
          <div className="relative w-12 h-12">
            <MainNav />
          </div>
          <NavLink name="About" icon={<FaInfoCircle />} />
          <NavLink name="Settings" icon={<FaCog />} />
        </ul>
      </Container>
    </div>
  );
}
