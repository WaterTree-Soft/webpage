'use client'
import React, { useEffect, useState } from "react";
import { Facebook, Twitter, Linkedin, ArrowRight, PhoneCallIcon, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return (
    <footer className="w-full bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / Brand */}
        <div className="ml-2">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            WaterTree Infotech
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Empowering businesses with innovative software solutions that drive
            growth and transform digital experiences.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#">
              <Facebook className="w-5 h-5 hover:text-blue-500" />
            </a>
            <a href="#">
              <Twitter className="w-5 h-5 hover:text-blue-400" />
            </a>
            <a href="#">
              <Linkedin className="w-5 h-5 hover:text-blue-600" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex items-center justify-between flex-col ">
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul>
            {[
              "About Us",
              "Services",
              "Portfolio",
              "Careers",
              "Blog",
              "Support",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="group flex items-center text-gray-300 hover:text-white transition-all duration-300"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 mr-0 group-hover:mr-2" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    {item}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact / Demo */}
        <div className="ml-2 space-y-1">
          <h2 className="text-lg font-semibold mb-3">Schedule a Free Demo</h2>
          <p className="text-sm flex flex-row gap-2">
            <PhoneCallIcon /> +91 99999 99999
          </p>
          <p className="text-sm flex flex-row gap-2">
            <Mail /> watertreeinfotech@gmail.com
          </p>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700 pt-4">
        © {year} WaterTree Infotech. All rights reserved.
      </div>
    </footer>
  );
};

