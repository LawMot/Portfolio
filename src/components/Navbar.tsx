"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import navigations from "@/data/NavbarLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="background-color-rose-200 to-my-gray-50/0 fixed z-50 flex w-full justify-between bg-linear-to-b from-black from-60% pb-5">
      <div className="flex gap-x-20">
        <div className="font-koulen text-dusty-rose m-4 ml-8 flex w-20 items-center text-center text-2xl/6">
          Motunrayo Lawrence
        </div>
        <div className="mt-7 space-x-8 text-white">
          {navigations.map(({ name, link }) => (
            <Link key={name} href={link}>
              {name}
            </Link>
          ))}
        </div>
      </div>

      <div className="relative m-5" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="flex h-10 w-10 cursor-pointer rounded-lg bg-linear-to-b from-rose-400 to-amber-950 transition-transform focus:outline-none active:scale-95"
        />

        {isOpen && (
          <div className="absolute right-0 z-50 mt-2 w-40 rounded-lg bg-zinc-900 py-2 text-white shadow-xl">
            <Link
              href="https://linkedin.com/in/motunrayo-lawrence"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm transition-colors hover:bg-zinc-800"
              onClick={() => setIsOpen(false)}
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/LawMot"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm transition-colors hover:bg-zinc-800"
              onClick={() => setIsOpen(false)}
            >
              GitHub
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
