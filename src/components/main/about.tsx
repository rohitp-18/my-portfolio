import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

function About({ visibleSections }: { visibleSections: Set<string> }) {
  return (
    <section
      id="about"
      className={`w-full min-h-[910px] h-screen max-h-[1000px] py-14 bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 relative transition-all duration-1000 ${
        visibleSections.has("about") ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center justify-center lg:justify-between h-full gap-8 flex-row-reverse relative px-8 lg:px-16 z-50">
        <div
          className={`max-w-2xl transition-all duration-1000 delay-200 ${
            visibleSections.has("about")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className={`welcome text-xs md:text-sm tracking-[0.15em] text-gray-400 font-semibold mb-3 uppercase transition-all duration-700 delay-300 ${
              visibleSections.has("about")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            About Me
          </div>
          <div
            className={`title text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-700 delay-500 ${
              visibleSections.has("about")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            Full Stack{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Project Developer
            </span>
          </div>

          <div
            className={`description text-gray-300 text-xs md:text-sm lg:text-base leading-relaxed max-w-lg mb-6 font-light transition-all duration-700 delay-700 ${
              visibleSections.has("about")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            Over the past 3 years, I've immersed myself in web development
            through hands-on project experience, specializing in building and
            deploying large-scale applications. With a strong foundation in the
            MERN stack (MongoDB, Express.js, React.js, Node.js), I've
            successfully developed and launched multiple full-stack applications
            from concept to deployment.
          </div>

          <div
            className={`skills-section mb-6 transition-all duration-700 delay-900 ${
              visibleSections.has("about")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            <h3 className="text-lg md:text-xl font-semibold text-blue-400 mb-4">
              Core Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "React.js",
                "Node.js",
                "MongoDB",
                "Express.js",
                "Next.js",
                "JavaScript",
              ].map((skill, index) => (
                <div
                  key={skill}
                  className={`bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg px-3 py-2 text-center hover:border-blue-400/40 hover:scale-105 transform transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-500/10 ${
                    visibleSections.has("about")
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90"
                  }`}
                  style={{
                    transitionDelay: `${1100 + index * 100}ms`,
                  }}
                >
                  <span className="text-sm text-gray-300 font-medium">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`experience-section mb-6 transition-all duration-700 delay-[1800ms] ${
              visibleSections.has("about")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            <h3 className="text-lg md:text-xl font-semibold text-purple-400 mb-4">
              What I Do
            </h3>
            <div className="space-y-3">
              {[
                {
                  title: "Full Stack Development",
                  description:
                    "Building and deploying complete web applications from concept to launch",
                  color: "blue",
                },
                {
                  title: "Modern Web Applications",
                  description:
                    "Creating responsive applications using React, Next.js, and modern frameworks",
                  color: "purple",
                },
                {
                  title: "Project Architecture",
                  description:
                    "Designing and implementing scalable application structures and APIs",
                  color: "cyan",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 group hover:transform hover:translate-x-2 transition-all duration-300 hover:bg-gray-800/20 p-2 rounded-lg ${
                    visibleSections.has("about")
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-5"
                  }`}
                  style={{
                    transitionDelay: `${2000 + index * 200}ms`,
                  }}
                >
                  <div
                    className={`w-2 h-2 bg-${item.color}-400 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-${item.color}-400/50`}
                  ></div>
                  <div>
                    <h4 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-3 lg:gap-4 items-start sm:items-center mt-8 transition-all duration-700 delay-[2600ms] ${
              visibleSections.has("about")
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-5 scale-95"
            }`}
          >
            <a
              href="#projects"
              className="inline-block transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <HoverBorderGradient className="px-6 py-3 text-sm font-medium shadow-lg hover:shadow-blue-500/25">
                View Projects
              </HoverBorderGradient>
            </a>
            <a
              href="#contact"
              className="inline-block transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <HoverBorderGradient className="flex items-center gap-2 px-6 py-3 text-sm font-medium shadow-lg hover:shadow-purple-500/25">
                Get In Touch
              </HoverBorderGradient>
            </a>
          </div>
        </div>

        {/* Stats/Info part */}
        <div
          className={`hidden lg:flex w-full h-full items-center justify-center relative max-w-md transition-all duration-1000 delay-1000 ${
            visibleSections.has("about")
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90"
          }`}
        >
          <div className="grid grid-cols-2 gap-6 w-full">
            {[
              {
                icon: "🚀",
                title: "Innovation",
                description: "Cutting-edge solutions",
                color: "blue",
              },
              {
                icon: "⚡",
                title: "Performance",
                description: "Optimized & fast",
                color: "yellow",
              },
              {
                icon: "🎯",
                title: "Precision",
                description: "Attention to detail",
                color: "purple",
              },
              {
                icon: "🌟",
                title: "Quality",
                description: "Excellence driven",
                color: "cyan",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-${
                  feature.color
                }-500/10 to-purple-500/10 border border-${
                  feature.color
                }-500/20 rounded-xl p-6 text-center hover:border-${
                  feature.color
                }-400/40 hover:scale-105 transform transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-${
                  feature.color
                }-500/20 ${
                  visibleSections.has("about")
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-75 rotate-12"
                }`}
                style={{
                  transitionDelay: `${1200 + index * 150}ms`,
                  transitionDuration: "800ms",
                }}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div
                  className={`text-lg font-semibold text-${feature.color}-400 mb-1 group-hover:scale-105 transition-transform duration-300`}
                >
                  {feature.title}
                </div>
                <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
