import React from "react";

export default function Heading({
  heading,
  size,
}: {
  heading: string;
  size: string;
}) {
  return <h1 className={`mb-4 text-${size}xl`}>{heading}</h1>;
}
