import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center min-h-screen py-16 text-white">
      {children}
    </div>
  );
}
