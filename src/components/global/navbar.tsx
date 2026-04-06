"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/75 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/75">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-x-8">
          <Link
            href="/"
            className="text-xl font-bold text-zinc-900 hover:text-zinc-700 dark:text-white dark:hover:text-zinc-300"
          >
            <span className="text-blue-600 dark:text-blue-400">Dev</span>Note
          </Link>
          <div className="hidden md:flex md:items-center md:gap-x-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-white ${
                pathname === "/"
                  ? "text-zinc-900 dark:text-white"
                  : "text-zinc-500 dark:text-zinc-400"
              }`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-white ${
                pathname === "/projects"
                  ? "text-zinc-900 dark:text-white"
                  : "text-zinc-500 dark:text-zinc-400"
              }`}
            >
              Projects
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <ThemeToggle />
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon
              icon={isMenuOpen ? faXmark : faBars}
              className="h-5 w-5 text-zinc-600 dark:text-zinc-400"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen
            ? "max-h-48 border-b border-zinc-200 dark:border-zinc-800"
            : "max-h-0"
        } overflow-hidden transition-all duration-200 ease-in-out`}
      >
        <div className="flex flex-col space-y-4 px-4 py-4">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-white ${
              pathname === "/"
                ? "text-zinc-900 dark:text-white"
                : "text-zinc-500 dark:text-zinc-400"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-white ${
              pathname === "/projects"
                ? "text-zinc-900 dark:text-white"
                : "text-zinc-500 dark:text-zinc-400"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}
