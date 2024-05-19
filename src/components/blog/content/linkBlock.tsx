import React from "react";

const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a href={href} className="text-blue-500 hover:underline">
      {children}
    </a>
  );
};

export default Link;
