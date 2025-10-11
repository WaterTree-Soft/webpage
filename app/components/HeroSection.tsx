"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beam";
import { Code, Search, Smartphone } from "lucide-react";

export function HeroSection() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Transform Your Digital Future
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Leading IT solutions company specializing in web development, mobile
          apps, SEO optimization, and digital transformation for modern
          businesses.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 max-w-7xl mx-auto">
        <div className="text-center animate-scale-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-700 rounded-full mb-4 shadow-glow">
            <Code className="h-8 w-8 text-black" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Web Development
          </h3>
          <p className="text-muted-foreground">
            Modern, responsive websites built with cutting-edge technologies
          </p>
        </div>

        <div
          className="text-center animate-scale-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-700 rounded-full mb-4 shadow-glow">
            <Smartphone className="h-8 w-8 text-black" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Mobile Apps
          </h3>
          <p className="text-muted-foreground">
            iOS, Android, and cross-platform mobile applications
          </p>
        </div>

        <div
          className="text-center animate-scale-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-700 rounded-full mb-4 shadow-glow">
            <Search className="h-8 w-8 text-black" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            SEO Optimization
          </h3>
          <p className="text-muted-foreground">
            Boost your online visibility and drive organic traffic
          </p>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
