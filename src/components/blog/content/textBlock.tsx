import React from "react";

const TextBlock = ({ children }: { children: React.ReactNode }) => {
  return <p className="mb-4">{children}</p>;
};

export default TextBlock;
