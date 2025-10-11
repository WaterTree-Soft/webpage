import React from "react";
import { ColourfulText } from "./ui/colorfulText";
import HeaderWithSubtitle from "./reusable/Header";
import {
  Code,
  Smartphone,
  Search,
  Cloud,
  Database,
  Shield,
} from "lucide-react";
import { CardSpotlight } from "./ui/card-spotlight";
import { SpotLight } from "three";
import { BackgroundLines } from "./ui/background-lines";
export const OurServices = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern frameworks like React, Vue, and Angular.",
      features: [
        "Responsive Design",
        "E-commerce Solutions",
        "CMS Development",
        "Progressive Web Apps",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android platforms.",
      features: [
        "iOS Development",
        "Android Development",
        "React Native",
        "Flutter Apps",
      ],
    },
    {
      icon: Search,
      title: "SEO & Digital Marketing",
      description:
        "Comprehensive SEO strategies to improve your online visibility and drive organic traffic.",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Content Strategy",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services for modern businesses.",
      features: [
        "AWS Integration",
        "Azure Services",
        "Cloud Migration",
        "DevOps Solutions",
      ],
    },
    {
      icon: Database,
      title: "Database Management",
      description:
        "Efficient database design, optimization, and management solutions.",
      features: [
        "Database Design",
        "Performance Tuning",
        "Data Migration",
        "Backup Solutions",
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets and data.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance",
        "Risk Assessment",
      ],
    },
  ];
  return (
    <section className=" flex flex-col items-center justify-center py-12">
      <HeaderWithSubtitle
        header="Our"
        subtitle="Comprehensive IT solutions designed to accelerate your business growth and digital transformation"
        helilightedText="Services"
        // heilightedTextColor="bg-gradient-primary bg-clip-text text-transparent"
      />
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {services.map((data, index) => {
        return (
          <div key={index} className="mb-8 h-full">
            <CardSpotlight className="h-full flex flex-col shadow-2xl">
              <p className="text-xl font-bold mb-2 text-gray-300 hover:text-gray-300">
                <span className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4 group-hover:shadow-glow transition-all duration-300">
                  <data.icon className="inline-block mr-2 " />
                </span>

                {data.title}
              </p>
              <p className="text-md text-gray-300">{data.description}</p>
              <ul className="list-disc pl-5 mt-auto text-gray-300">
                {data.features.map((feature, idx) => (
                  <li key={idx} className="text-sm leading-relaxed">
                    {feature}
                  </li>
                ))}
              </ul>
            </CardSpotlight>
          </div>
        );
      })}
    </div>
    </section>
  );
};
