import Link from "next/link";
import React from "react";

const navigation = [
  // { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  // { name: "Blog", href: "/blog" },
];

export const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center bg-zinc-900 text-white">
      <div className="flex justify-between items-center w-2/3 pt-12">
        <Link href="/" className="text-3xl">
          Grimoire
        </Link>
        <ul className="flex items-center gap-x-4 text-xl">
          {navigation.map((item) => (
            <li key={item.name} className="hover:underline">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
