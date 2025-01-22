"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const NavItems = [
  {
    name: "الرئيسية",
    href: "#",
  },
  {
    name: "الحلقات",
    href: "#",
  },
  {
    name: "التصنيفات",
    href: "#",
  },
  {
    name: "عن البودكاست",
    href: "#",
  },
  {
    name: "اتصل بنا",
    href: "#",
  },
];

const Navlinks = () => {
  return (
    <>
      {NavItems.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className="py-5 px-3 hover:text-foreground/80"
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <nav className="bg-background text-foreground" dir="rtl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4 space-x-reverse">
            {/* Logo */}
            <div>
              <Link
                href="/"
                className="flex items-center py-5 px-2 text-foreground"
              >
                <span className="font-bold text-xl">بودكاست</span>
              </Link>
            </div>
            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1 space-x-reverse">
              <Navlinks />
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <List className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden transition-max-height duration-500 ease-in-out overflow-hidden",
          {
            "max-h-screen": isOpen,
            "max-h-0": !isOpen,
          }
        )}
      >
        <div className="flex flex-col">
          <Navlinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
