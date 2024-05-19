import React from "react";

export default function Header({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="w-full pb-8">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
        {title}
      </h2>
      <p className="my-4 text-zinc-400">{subtitle}</p>
      <div className="h-px bg-zinc-800" />
    </div>
  );
}
