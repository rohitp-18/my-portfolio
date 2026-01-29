import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

function Educations({ visibleSections }: { visibleSections: Set<string> }) {
  return (
    <section
      id="education"
      className={`w-full min-h-min max-h-max h-screen py-8 md:py-14 bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 relative transition-all duration-1000 ${
        visibleSections.has("education") ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col lg:flex-row-reverse lg:justify-between gap-5 items-center h-full relative px-4 sm:px-8 lg:px-16 z-50">
        <div
          className={`w-full lg:max-w-2xl transition-all duration-1000 delay-200 ${
            visibleSections.has("education")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className={`welcome text-xs md:text-sm tracking-[0.15em] text-gray-400 font-semibold mb-2 md:mb-3 uppercase transition-all duration-700 delay-300 text-center lg:text-left ${
              visibleSections.has("education")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            My Education
          </div>
          <div
            className={`title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight transition-all duration-700 delay-500 text-center lg:text-left ${
              visibleSections.has("education")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Academic{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Journey
            </span>
          </div>

          <div
            className={`description text-gray-300 text-xs md:text-sm lg:text-base leading-relaxed max-w-lg mb-4 md:mb-6 font-light transition-all duration-700 delay-700 text-center lg:text-left mx-auto lg:mx-0 ${
              visibleSections.has("education")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Strong academic foundation in computer science and continuous
            learning through practical projects. Committed to staying updated
            with the latest technologies and industry best practices.
          </div>

          <div
            className={`education-timeline space-y-4 md:space-y-6 transition-all duration-700 delay-900 ${
              visibleSections.has("education")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Formal Education */}
            <div
              className={`formal-education transition-all duration-700 delay-1000 ${
                visibleSections.has("education")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-blue-400 mb-3 md:mb-4 flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                Formal Education
              </h3>
              <div className="space-y-3 md:space-y-4 stagger-children">
                <div
                  className={`bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-3 md:p-4 hover:border-blue-400/40 hover:scale-105 transition-all duration-300 cursor-pointer group transform ${
                    visibleSections.has("education")
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-95 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: visibleSections.has("education")
                      ? "1200ms"
                      : "0ms",
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                    <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      B.Sc in Computer Science
                    </h4>
                    <span className="text-xs text-blue-400 font-medium">
                      2023 - 2026
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2 group-hover:text-gray-300 transition-colors duration-300">
                    Punyashlok Ahilyabai Holkar University, Solapur
                  </p>
                  <p className="text-xs text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    Specialized in Computer Science with a focus on Data
                    Structures, Algorithms, and Database Management Systems
                    (DBMS)..
                  </p>
                </div>

                <div
                  className={`bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-lg p-3 md:p-4 hover:border-purple-400/40 hover:scale-105 transition-all duration-300 cursor-pointer group transform ${
                    visibleSections.has("education")
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-95 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: visibleSections.has("education")
                      ? "1400ms"
                      : "0ms",
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                    <h4 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                      Higher Secondary Education
                    </h4>
                    <span className="text-xs text-purple-400 font-medium">
                      2021 - 2023
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2 group-hover:text-gray-300 transition-colors duration-300">
                    SGRGS Mahavidyalay Paranda
                  </p>
                  <p className="text-xs text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    Science Stream with Mathematics, Physics, Chemistry, and
                    Biology
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Gained */}
            <div
              className={`skills-gained transition-all duration-700 delay-1500 ${
                visibleSections.has("education")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-cyan-400 mb-3 md:mb-4 flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                Key Learning Areas
              </h3>
              <div className="space-y-2 md:space-y-3">
                {[
                  {
                    title: "Core CS Fundamentals",
                    description:
                      "Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), Operating Systems, and Computer Networks.",
                    color: "blue",
                    delay: "1600ms",
                  },
                  {
                    title: "Web Development Stack",
                    description:
                      "Frontend and backend technologies, database management, and API development",
                    color: "purple",
                    delay: "1700ms",
                  },
                  {
                    title: "Specialized Coursework",
                    description:
                      "Self-directed learning in Generative AI, Vector Databases, and Cloud Architecture (AWS).",
                    color: "cyan",
                    delay: "1800ms",
                  },
                ].map((item, index) => {
                  const getItemClasses = (color: string) => {
                    switch (color) {
                      case "blue":
                        return {
                          dot: "bg-blue-400",
                          shadow: "group-hover:shadow-blue-400/50",
                          text: "group-hover:text-blue-400",
                        };
                      case "purple":
                        return {
                          dot: "bg-purple-400",
                          shadow: "group-hover:shadow-purple-400/50",
                          text: "group-hover:text-purple-400",
                        };
                      case "cyan":
                        return {
                          dot: "bg-cyan-400",
                          shadow: "group-hover:shadow-cyan-400/50",
                          text: "group-hover:text-cyan-400",
                        };
                      default:
                        return {
                          dot: "bg-blue-400",
                          shadow: "group-hover:shadow-blue-400/50",
                          text: "group-hover:text-blue-400",
                        };
                    }
                  };

                  const itemClasses = getItemClasses(item.color);

                  return (
                    <div
                      key={index}
                      className={`flex items-start gap-3 group hover:transform hover:translate-x-2 transition-all duration-300 hover:bg-gray-800/20 p-2 rounded-lg transform ${
                        visibleSections.has("education")
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-8"
                      }`}
                      style={{
                        transitionDelay: visibleSections.has("education")
                          ? item.delay
                          : "0ms",
                      }}
                    >
                      <div
                        className={`w-2 h-2 ${itemClasses.dot} rounded-full mt-2 group-hover:scale-150 transition-transform duration-300 group-hover:shadow-lg ${itemClasses.shadow} flex-shrink-0`}
                      ></div>
                      <div>
                        <h4
                          className={`text-sm font-medium text-white ${itemClasses.text} transition-colors duration-300`}
                        >
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-3 lg:gap-4 items-center sm:items-start mt-6 md:mt-8 transition-all duration-700 delay-1900 ${
              visibleSections.has("education")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="#projects"
              className="inline-block transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto"
            >
              <HoverBorderGradient className="px-4 md:px-6 py-3 text-sm font-medium shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto text-center">
                View Projects
              </HoverBorderGradient>
            </a>
            <a
              href="#skills"
              className="inline-block transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 w-full sm:w-auto"
            >
              <HoverBorderGradient className="flex items-center justify-center gap-2 px-4 md:px-6 py-3 text-sm font-medium shadow-lg hover:shadow-purple-500/25 w-full sm:w-auto">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Explore Skills
              </HoverBorderGradient>
            </a>
          </div>
        </div>

        {/* Education Stats/Visual - Hidden on mobile and tablet */}
        <div
          className={`hidden lg:flex w-full h-full items-center justify-center relative max-w-md transition-all duration-1000 delay-400 ${
            visibleSections.has("education")
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90"
          }`}
        >
          <div className="relative w-80 h-80">
            {/* Interactive Learning Path Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Main Knowledge Tree */}
                <div
                  className={`w-64 h-64 relative transition-all duration-1000 delay-500 ${
                    visibleSections.has("education")
                      ? "opacity-100 scale-100 rotate-0"
                      : "opacity-0 scale-75 rotate-12"
                  }`}
                >
                  {/* Central Academic Hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-purple-500/30 via-blue-500/30 to-cyan-500/30 border border-purple-400/50 rounded-xl flex items-center justify-center backdrop-blur-sm shadow-2xl shadow-purple-500/20">
                    <div className="text-center">
                      <div className="text-base font-bold text-white mb-1">
                        📚
                      </div>
                      <div className="text-xs text-purple-300 font-semibold">
                        Learning
                      </div>
                    </div>
                  </div>

                  {/* Academic Achievements Circle */}
                  {[
                    {
                      icon: "🎓",
                      label: "Degree",
                      subject: "CS",
                      angle: 0,
                      color: "blue",
                      delay: "700ms",
                    },
                    {
                      icon: "📖",
                      label: "Courses",
                      subject: "Web",
                      angle: 90,
                      color: "green",
                      delay: "900ms",
                    },
                    {
                      icon: "🏆",
                      label: "Projects",
                      subject: "Full-Stack",
                      angle: 180,
                      color: "orange",
                      delay: "1100ms",
                    },
                    {
                      icon: "💡",
                      label: "Skills",
                      subject: "Problem Solving",
                      angle: 270,
                      color: "purple",
                      delay: "1300ms",
                    },
                  ].map((item, index) => {
                    const getColorClasses = (color: string) => {
                      switch (color) {
                        case "blue":
                          return {
                            bg: "from-blue-500/20 to-blue-600/20",
                            border: "border-blue-400/40",
                            glow: "shadow-blue-400/20",
                          };
                        case "green":
                          return {
                            bg: "from-green-500/20 to-emerald-600/20",
                            border: "border-green-400/40",
                            glow: "shadow-green-400/20",
                          };
                        case "orange":
                          return {
                            bg: "from-orange-500/20 to-amber-600/20",
                            border: "border-orange-400/40",
                            glow: "shadow-orange-400/20",
                          };
                        case "purple":
                          return {
                            bg: "from-purple-500/20 to-violet-600/20",
                            border: "border-purple-400/40",
                            glow: "shadow-purple-400/20",
                          };
                        default:
                          return {
                            bg: "from-blue-500/20 to-blue-600/20",
                            border: "border-blue-400/40",
                            glow: "shadow-blue-400/20",
                          };
                      }
                    };

                    const colorClasses = getColorClasses(item.color);
                    const radius = 90;
                    const x = Math.cos((item.angle * Math.PI) / 180) * radius;
                    const y = Math.sin((item.angle * Math.PI) / 180) * radius;

                    return (
                      <div
                        key={index}
                        className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-18 h-18 bg-gradient-to-br ${
                          colorClasses.bg
                        } border ${
                          colorClasses.border
                        } rounded-lg flex flex-col items-center justify-center transition-all duration-500 cursor-pointer group hover:scale-110 hover:shadow-lg ${
                          colorClasses.glow
                        } ${
                          visibleSections.has("education")
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-75"
                        }`}
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transitionDelay: visibleSections.has("education")
                            ? item.delay
                            : "0ms",
                        }}
                      >
                        <div className="text-sm mb-1 group-hover:animate-bounce">
                          {item.icon}
                        </div>
                        <div className="text-xs text-center">
                          <div className="text-white font-medium">
                            {item.label}
                          </div>
                          <div className="text-gray-300 text-xs">
                            {item.subject}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Knowledge Pathways */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <radialGradient
                        id="pathGradient"
                        cx="50%"
                        cy="50%"
                        r="50%"
                      >
                        <stop offset="0%" stopColor="rgba(147, 51, 234, 0.4)" />
                        <stop
                          offset="100%"
                          stopColor="rgba(59, 130, 246, 0.2)"
                        />
                      </radialGradient>
                    </defs>
                    {/* Circular pathway */}
                    <circle
                      cx="128"
                      cy="128"
                      r="90"
                      fill="none"
                      stroke="url(#pathGradient)"
                      strokeWidth="2"
                      strokeDasharray="8,4"
                      className={`transition-all duration-1500 ${
                        visibleSections.has("education")
                          ? "opacity-60 animate-pulse"
                          : "opacity-0"
                      }`}
                      style={{
                        transitionDelay: visibleSections.has("education")
                          ? "1500ms"
                          : "0ms",
                      }}
                    />
                  </svg>

                  {/* Learning Progress Indicators */}
                  {[
                    {
                      tech: "React",
                      level: "95%",
                      pos: "top-2 left-6",
                      color: "blue",
                      delay: "2000ms",
                    },
                    {
                      tech: "Node.js",
                      level: "90%",
                      pos: "top-2 right-6",
                      color: "green",
                      delay: "2200ms",
                    },
                    {
                      tech: "TypeScript",
                      level: "88%",
                      pos: "bottom-2 left-6",
                      color: "purple",
                      delay: "2400ms",
                    },
                    {
                      tech: "MongoDB",
                      level: "85%",
                      pos: "bottom-2 right-6",
                      color: "orange",
                      delay: "2600ms",
                    },
                  ].map((skill, index) => {
                    const getSkillClasses = (color: string) => {
                      switch (color) {
                        case "blue":
                          return {
                            bg: "bg-blue-500/20",
                            text: "text-blue-300",
                            bar: "bg-blue-400",
                          };
                        case "green":
                          return {
                            bg: "bg-green-500/20",
                            text: "text-green-300",
                            bar: "bg-green-400",
                          };
                        case "purple":
                          return {
                            bg: "bg-purple-500/20",
                            text: "text-purple-300",
                            bar: "bg-purple-400",
                          };
                        case "orange":
                          return {
                            bg: "bg-orange-500/20",
                            text: "text-orange-300",
                            bar: "bg-orange-400",
                          };
                        default:
                          return {
                            bg: "bg-blue-500/20",
                            text: "text-blue-300",
                            bar: "bg-blue-400",
                          };
                      }
                    };

                    const skillClasses = getSkillClasses(skill.color);

                    return (
                      <div
                        key={index}
                        className={`absolute ${skill.pos} ${
                          skillClasses.bg
                        } rounded-lg p-2 backdrop-blur-sm border border-gray-600/30 transition-all duration-1000 hover:scale-105 cursor-pointer group ${
                          visibleSections.has("education")
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-0 translate-y-4"
                        }`}
                        style={{
                          transitionDelay: visibleSections.has("education")
                            ? skill.delay
                            : "0ms",
                        }}
                      >
                        <div className="text-xs font-medium text-white mb-1 group-hover:text-gray-200">
                          {skill.tech}
                        </div>
                      </div>
                    );
                  })}

                  {/* Floating Knowledge Particles */}
                  <div className="absolute inset-0">
                    {[
                      {
                        emoji: "💻",
                        delay: "3000ms",
                        duration: "6s",
                        path: "floating-1",
                      },
                      {
                        emoji: "⚡",
                        delay: "3500ms",
                        duration: "8s",
                        path: "floating-2",
                      },
                      {
                        emoji: "🚀",
                        delay: "4000ms",
                        duration: "7s",
                        path: "floating-3",
                      },
                    ].map((particle, index) => (
                      <div
                        key={index}
                        className={`absolute w-6 h-6 flex items-center justify-center transition-all duration-1000 ${
                          visibleSections.has("education")
                            ? "opacity-70 animate-bounce"
                            : "opacity-0"
                        }`}
                        style={{
                          left: `${25 + index * 25}%`,
                          top: `${20 + index * 20}%`,
                          transitionDelay: visibleSections.has("education")
                            ? particle.delay
                            : "0ms",
                          animationDuration: particle.duration,
                          animationDelay: particle.delay,
                        }}
                      >
                        <span className="text-sm">{particle.emoji}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Learning Progress Bars */}
              <div className="absolute -bottom-32 left-0 right-0 space-y-2">
                <div
                  className={`bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-3 backdrop-blur-sm border border-gray-600/30 transition-all duration-700 delay-2800 ${
                    visibleSections.has("education")
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-white font-medium">
                      Continuous Learning
                    </span>
                    <span className="text-xs text-blue-400">∞</span>
                  </div>
                  <div className="w-full bg-gray-600/50 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 h-2 rounded-full transition-all duration-1000 ${
                        visibleSections.has("education") ? "w-full" : "w-0"
                      }`}
                      style={{
                        transitionDelay: visibleSections.has("education")
                          ? "3000ms"
                          : "0ms",
                      }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    {
                      value: "9.29",
                      label: "CGPA",
                      color: "blue",
                      delay: "3200ms",
                    },
                    {
                      value: "10+",
                      label: "Projects",
                      color: "purple",
                      delay: "3400ms",
                    },
                  ].map((stat, index) => {
                    const getStatClasses = (color: string) => {
                      switch (color) {
                        case "blue":
                          return {
                            bg: "from-blue-500/10 to-purple-500/10",
                            border: "border-blue-500/20",
                            hoverBorder: "hover:border-blue-400/40",
                            text: "text-blue-400",
                          };
                        case "purple":
                          return {
                            bg: "from-purple-500/10 to-purple-500/10",
                            border: "border-purple-500/20",
                            hoverBorder: "hover:border-purple-400/40",
                            text: "text-purple-400",
                          };
                        default:
                          return {
                            bg: "from-blue-500/10 to-purple-500/10",
                            border: "border-blue-500/20",
                            hoverBorder: "hover:border-blue-400/40",
                            text: "text-blue-400",
                          };
                      }
                    };

                    const statClasses = getStatClasses(stat.color);

                    return (
                      <div
                        key={index}
                        className={`bg-gradient-to-r ${statClasses.bg} border ${
                          statClasses.border
                        } rounded-lg p-2 text-center ${
                          statClasses.hoverBorder
                        } hover:scale-105 transition-all duration-300 cursor-pointer group transform ${
                          visibleSections.has("education")
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-95 translate-y-4"
                        }`}
                        style={{
                          transitionDelay: visibleSections.has("education")
                            ? stat.delay
                            : "0ms",
                        }}
                      >
                        <div
                          className={`text-sm font-bold ${statClasses.text} group-hover:scale-110 transition-transform duration-300`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-300">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Educations;
