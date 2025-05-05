import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 bg-black hover:bg-gray-900 text-white rounded-md transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}