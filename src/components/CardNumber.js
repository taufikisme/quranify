import React from "react";

export default function CardNumber({ number }) {
  return (
    <div
      className="flex justify-center items-center rounded-full bg-purple-600 text-white text-xs"
      style={{ width: "26px", height: "24px" }}
    >
      {number}
    </div>
  );
}
