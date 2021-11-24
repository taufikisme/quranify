import React from "react";

export default function CardNumber({ number }) {
  return (
    <div className="flex justify-center items-center w-6 h-6 rounded-full bg-purple-600 text-white text-xs">
      {number}
    </div>
  );
}
