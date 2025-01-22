"use client";

import { useState, useCallback, FC } from "react";
import Link from "next/link";
import { List, X, MagnifyingGlass } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
}

const NavItems: NavItem[] = [
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

const Search: FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = useCallback(() => {
    setIsSearchOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex items-center space-x-1 space-x-reverse">
      <button onClick={toggleSearch} aria-label="Toggle search">
        <MagnifyingGlass className="h-6 w-6" />
      </button>

      <div
        className={cn(
          "transition-all duration-300 ease-in-out overflow-hidden",
          {
            "max-w-xs opacity-100": isSearchOpen,
            "max-w-0 opacity-0": !isSearchOpen,
          }
        )}
      >
        <input
          type="text"
          className="py-2 rounded-full px-4 border"
          placeholder="ابحث..."
        />
      </div>
    </div>
  );
};

const Navlinks: FC = () => {
  return (
    <>
      {NavItems.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className="py-5 hover:text-foreground/80"
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

const Navbar: FC = () => {
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
              <Search />
            </div>
          </div>
          {/* Search and Mobile menu button */}
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
        <div className="px-7 flex flex-col">
          <Search />
          <Navlinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
