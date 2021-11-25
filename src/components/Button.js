import React from "react";

export default function Button({ children, className }) {
  const addClassName = className ? `${className}` : "";
  return (
    <button
      className={`mt-4 px-6 py-2 text-white text-sm bg-purple-500 rounded-full shadow-xl transform transition-all hover:scale-105 active:scale-95 ${addClassName}`}
    >
      {children}
    </button>
  );
}
