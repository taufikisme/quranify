import React from "react";

export default function MainCard({ children, className }) {
  const addClassName = className ? `${className}` : "";
  return (
    <div
      className={`mt-4 shadow-xl rounded-2xl bg-gradient-to-r from-purple-600 to-purple-400 w-full py-6 flex flex-col justify-center text-white text-center space-y-2 ${addClassName}`}
    >
      {children}
    </div>
  );
}
