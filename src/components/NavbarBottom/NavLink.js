import React from "react";
import { Link } from "react-router-dom";

export default function NavLink({ name, icon, link }) {
  const Content = () => (
    <button className="w-12 flex justify-center items-center space-y-1 text-center flex-col">
      <div className="text-purple-600 text-md">{icon}</div>
      <span className="text-gray-400" style={{ fontSize: "12px" }}>
        {name}
      </span>
    </button>
  );

  if (link) {
    return (
      <Link to={link}>
        <Content />
      </Link>
    );
  } else {
    return <Content />;
  }
}
