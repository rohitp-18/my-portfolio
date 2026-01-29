"use client";

import React, { useState, useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Image from "next/image";
import photo from "../../assets/1717652407586.png";

function Home({ visibleSections }: { visibleSections: Set<string> }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "a MERN Stack Developer",
    "a Full Stack Website Developer",
    "a React.js Developer",
    "a Node.js Developer",
    "a Next.js Developer",
    "an AI Solutions Developer",
    "Full Stack Engineer & GenAI Enthusiast",
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 30;

    const timer = setTimeout(
      () => {
        if (!isDeleting && displayText !== currentRole) {
          // Typing
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        } else if (isDeleting && displayText !== "") {
          // Deleting
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        } else if (!isDeleting && displayText === currentRole) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayText === "") {
          // Move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      },
      isDeleting ? deleteSpeed : typeSpeed,
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);
  return (
    <section
      id="home"
      className="h-screen min-h-min lg:min-h-[700px] max-h-[900px] pt-28 pb-14 lg:py-14 w-full bg-gradient-to-br flex justify-center items-center from-gray-950 via-slate-950 to-black relative"
    >
      <div className="flex flex-col w-full lg:flex-row items-center min-h-screen relative md:px-8 px-4 z-50 py-8 lg:py-16 gap-8 lg:gap-12 max-w-6xl mx-auto">
        <div
          className={`w-full lg:max-w-2xl text-center lg:text-left lg:flex-1 order-2 lg:order-1 transition-all duration-1000 ${
            visibleSections.has("home")
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <div
            className={`welcome text-xs sm:text-sm md:text-base tracking-[0.15em] text-gray-400 font-semibold mb-3 uppercase transition-all duration-700 delay-200 ${
              visibleSections.has("home")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Welcome to my Portfolio
          </div>
          <div
            className={`im text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 lg:mb-6 leading-tight transition-all duration-700 delay-400 ${
              visibleSections.has("home")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient animate-bounce-subtle">
              Rohit Patil
            </span>
          </div>

          <div
            className={`work mb-4 lg:mb-6 transition-all duration-700 delay-600 ${
              visibleSections.has("home")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent min-h-[1.5rem] sm:min-h-[2rem] md:min-h-[2.5rem] lg:min-h-[3rem] flex items-center justify-center lg:justify-start leading-tight animate-typing">
              {displayText}
              <span className="text-blue-400 animate-pulse ml-1 animate-blink">
                |
              </span>
            </div>
          </div>
          <div
            className={`description text-gray-300 text-xs sm:text-xs md:text-sm lg:text-base leading-relaxed max-w-full lg:max-w-lg mb-6 lg:mb-8 font-light mx-auto lg:mx-0 transition-all duration-700 delay-800 ${
              visibleSections.has("home")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            I build scalable, high-performance web applications and intelligent
            AI solutions. Specializing in the MERN Stack, Next.js, and DevOps, I
            bridge the gap between complex backend architecture and seamless
            user experiences. Beyond coding, I deploy production-ready systems
            using AWS, Docker, and Nginx.
          </div>
          <div
            className={`flex flex-col sm:flex-row w-full gap-3 lg:gap-4 justify-center lg:justify-start items-center mt-6 lg:mt-8 transition-all duration-700 delay-1000 ${
              visibleSections.has("home")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="/Rohit Patil - MERN GenAI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto animate-slide-up hover:animate-pulse-glow"
            >
              <HoverBorderGradient className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-xs sm:text-sm lg:text-base font-medium shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto text-center animate-shimmer">
                Download Resume
              </HoverBorderGradient>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send/?phone=919356971002&text=Hello%20Rohit!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.&type=phone_number&app_absent=0"
              className="inline-block transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 w-full sm:w-auto animate-slide-up animation-delay-200 hover:animate-bounce-subtle"
            >
              <HoverBorderGradient className="flex items-center justify-center gap-2 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-xs sm:text-sm lg:text-base font-medium shadow-lg hover:shadow-green-500/25 w-full sm:w-auto animate-shimmer">
                <IconBrandWhatsapp
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px] animate-spin-slow hover:animate-bounce"
                />
                Let's Connect
              </HoverBorderGradient>
            </a>
          </div>
        </div>

        {/* Profile Photo Container */}
        <div className="relative w-48 h-48 md:w-72 md:h-72 order-1 lg:order-2 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-[80px] opacity-50 animate-pulse"></div>

          <div className="relative w-full h-full bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-full border-2 border-slate-700/50 shadow-2xl overflow-hidden flex items-end justify-center">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #4f46e5 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>

            {/* 3. Your Transparent Photo */}
            {/* Adjust 'bottom-0' or 'scale' to position your face perfectly */}
            <Image
              src={photo}
              alt="Rohit Patil"
              className="relative z-10 w-[90%] h-[90%] object-cover object-bottom hover:scale-105 transition-transform duration-500"
            />

            {/* Optional: Glass Reflection Overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 via-transparent to-white/10 pointer-events-none z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
