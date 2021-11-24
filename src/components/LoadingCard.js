import React from "react";

export default function LoadingCard() {
  return (
    <div className="flex animate-pulse mt-4">
      <div className="py-5 w-2/12 h-10 bg-gray-300 text-white rounded-xl text-center"></div>
      <div className="w-2/3 text-left px-3 flex flex-col space-y-2">
        <div className="w-full h-3 rounded-full bg-gray-300"></div>
        <div className="w-6/12 h-2 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
}
