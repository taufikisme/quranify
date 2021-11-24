import React from "react";

export default function Container({ children, className }) {
  const addClassName = className ? `${className}` : "";
  return <div className={`container px-6 ${addClassName}`}>{children}</div>;
}
