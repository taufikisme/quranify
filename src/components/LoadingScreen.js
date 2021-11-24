import React from "react";

export default function LoadingScreen() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <img
        src="/images/quranify-logo.png"
        alt="Quranify Logo"
        className="w-16 h-16 animate-bounce"
      />
      <span className="animate-pulse">Loading ...</span>
    </div>
  );
}
