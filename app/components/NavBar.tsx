"use client";
import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black backdrop-blur-md border-b border-gray-200 dark:border-gray-700 px-6 md:px-12 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            WaterTree
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li
              key={item}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        {/* <div className="hidden md:block">
          <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg shadow">
            Get Started
          </button>
        </div> */}

        {/* Mobile Menu Icon Placeholder */}
        <div className="md:hidden">
          {/* Insert hamburger menu button or drawer trigger here */}
          <button className="text-gray-700 dark:text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
