'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import ModeSwitcher from './ui/ModeSwitcher';
import appLogo from '../assets/images/kalimah-logo.png';
import appLogoDark from '../assets/images/kalimah-logo-dark.png';
import Image from 'next/image';
import { Button } from './ui/button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky w-full top-0 z-50 transition-all duration-300 rtl bg-transparent ${scrolled || menuOpen ? 'bg-white dark:bg-background/95 dark:backdrop-blur-sm' : ''} ${scrolled && !menuOpen ? 'border-b border-gray-200/50 dark:border-gray-400/20' : ''}`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/">
          <Image src={appLogo} alt="Logo" className='h-8 w-auto dark:hidden' />
          <Image src={appLogoDark} alt="Logo" className='h-8 w-auto hidden dark:flex' />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 rtl:space-x-reverse">
          {['الرئيسية', 'الحلقات', 'المدونة', 'اتصل بنا'].map((item, index) => (
            <li key={index}>
              <Link href="/">
                <span className="hover:opacity-80 transition-all duration-75 cursor-pointer text-md">
                  {item}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 rtl:space-x-reverse">
          <ModeSwitcher />
          <svg xmlns="http://www.w3.org/2000/svg" className='duration-150 text-gray-600 dark:text-gray-100' width="26" height="26" viewBox="0 0 36 35" fill="none">
            <path className='duration-0' d="M16.3778 27.7083C22.8212 27.7083 28.0445 22.485 28.0445 16.0417C28.0445 9.59834 22.8212 4.375 16.3778 4.375C9.93453 4.375 4.71118 9.59834 4.71118 16.0417C4.71118 22.485 9.93453 27.7083 16.3778 27.7083Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path className='duration-0' d="M30.9613 30.625L24.6904 24.3542" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {/* <button className='hidden md:flex items-center justify-center px-6 py-2 border border-primary text-white dark:border-gray-50/60 rounded-full text-md font-normal dark:text-white/90 bg-primary dark:bg-transparent dark:hover:bg-primary dark:hover:border-primary transition-all'>
            تحميل التطبيـق
          </button> */}
          <Button size="lg" className="hidden md:flex rounded-full text-white dark:bg-transparent border border-primary dark:border-gray-50/60">
            ابدأ الاستماع
          </Button>
          <div className={`hamburger md:hidden ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} >
            <div></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* TODO: Improve Sliding in Animation for Mobile Menu & Add Social Icons */}
      {menuOpen && (
        <div
          className={`fixed container top-16 right-0 w-full bg-white dark:bg-background/95 dark:backdrop-blur-sm transition-all duration-1000 transform h-screen ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
            } md:hidden`}
        >
          <ul className="space-y-4 text-center pt-4">
            {['الرئيسية', 'الحلقات', 'المدونة', 'اتصل بنا'].map((item, index) => (
              <li key={index}>
                <Link href="/">
                  <span className="text-lg block py-2">{item}</span>
                </Link>

              </li>
            ))}
            <li>
              <button className='items-center justify-center px-6 py-2 border border-primary text-white dark:border-gray-50/60 rounded-full text-md font-normal dark:text-white/90 bg-primary dark:bg-transparent dark:hover:bg-primary dark:hover:border-primary transition-all'>
                تحميل التطبيـق
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
