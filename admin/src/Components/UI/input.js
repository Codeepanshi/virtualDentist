import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
      {...props}
    />
  );
}
