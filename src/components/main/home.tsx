"use client";

import React, { useState, useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

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
    "a Frontend Developer",
    "a Backend Developer",
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
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);
  return (
    <section
      id="home"
      className="h-screen min-h-[700px] max-h-[900px] py-14 w-full bg-gradient-to-br flex justify-center items-center from-gray-950 via-slate-950 to-black relative"
    >
      <div className="flex flex-col w-full lg:flex-row items-center min-h-screen relative px-4 z-50 py-8 lg:py-16 gap-8 lg:gap-12 max-w-7xl mx-auto">
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
            className={`im text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6 leading-tight transition-all duration-700 delay-400 ${
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
            <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent min-h-[1.5rem] sm:min-h-[2rem] md:min-h-[2.5rem] lg:min-h-[3rem] flex items-center justify-center lg:justify-start leading-tight animate-typing">
              {displayText}
              <span className="text-blue-400 animate-pulse ml-1 animate-blink">
                |
              </span>
            </div>
          </div>
          <div
            className={`description text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-full lg:max-w-lg mb-6 lg:mb-8 font-light mx-auto lg:mx-0 transition-all duration-700 delay-800 ${
              visibleSections.has("home")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            With over 3 years of hands-on project experience, I have worked
            extensively with modern technologies to build robust, scalable web
            applications. I am passionate about delivering high-quality
            solutions that create exceptional user experiences.
          </div>
          <div
            className={`flex flex-col sm:flex-row w-full gap-3 lg:gap-4 justify-center lg:justify-start items-center mt-6 lg:mt-8 transition-all duration-700 delay-1000 ${
              visibleSections.has("home")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="https://drive.google.com/file/d/1x7CPYb1J0wlcJ9E6fqwJz3EmZVWKeeSo/view?usp=drive_link"
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

        {/* Professional image section */}
        <div
          className={`flex w-full items-center justify-center relative order-1 lg:order-2 lg:flex-1 transition-all duration-1000 delay-600 ${
            visibleSections.has("home")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[-40px]"
          }`}
        >
          <CardContainer className="inter-var w-fit animate-float">
            <CardBody className="relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.1] rounded-2xl overflow-hidden transform transition-all duration-700 hover:scale-[1.02] w-fit h-fit mx-auto animate-glow-pulse">
              <CardItem
                translateZ="60"
                className="transition-transform duration-700 hover:animate-wiggle"
              >
                <img
                  src="https://res.cloudinary.com/rdisexc23ed/image/upload/w_1000,c_fill,ar_1:1,g_auto,b_rgb:262c35/v1719936876/Portfolio/about/avatar/nkp5hck2p22a4fds9g2j.jpg"
                  loading="lazy"
                  className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-60 lg:w-60 xl:h-72 xl:w-72 object-cover rounded-lg filter brightness-110 contrast-110 hover:animate-zoom-rotate transition-all duration-500"
                  alt="Rohit Patil - Professional MERN Stack Developer"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  );
}

export default Home;
