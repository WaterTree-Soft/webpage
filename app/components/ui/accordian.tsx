"use client";
import React, { useState } from "react";
import { ChevronDown, Star, Settings, User, Bell, Shield } from "lucide-react";

type AccordionItem = {
  id: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
};

type AccordionProps = {
  className?: string;
  items: AccordionItem[];
};

export const Accordion: React.FC<AccordionProps> = ({ className, items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-3 ${className || ""}`}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800/60 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-700/80"
        >
          {/* Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className="flex items-center justify-between w-full p-5 bg-gradient-to-r from-gray-800/40 to-gray-900/40 hover:from-gray-700/50 hover:to-gray-800/50 rounded-xl transition-all duration-300 group-hover:shadow-md hover:cursor-pointer"
            suppressHydrationWarning
          >
            <div className="flex items-center gap-4">
              {item.icon && (
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  {item.icon}
                </div>
              )}
              <div className="flex flex-col text-left">
                <span className="font-semibold text-white text-lg group-hover:text-blue-100 transition-colors duration-300">
                  {item.title}
                </span>
                {item.subtitle && (
                  <span className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-300">
                    {item.subtitle}
                  </span>
                )}
              </div>
            </div>
            <div className="flex-shrink-0 ml-4">
              <ChevronDown
                className={`w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-all duration-300 ${
                  openIndex === index ? "rotate-180 text-blue-400" : ""
                }`}
              />
            </div>
          </button>

          {/* Content with smooth animation */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-out ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-5 pb-5 pt-2">
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/30">
                <div className="text-gray-200 leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};