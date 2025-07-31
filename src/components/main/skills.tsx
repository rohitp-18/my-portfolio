import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

function Skills({ visibleSections }: { visibleSections: Set<string> }) {
  return (
    <section
      id="skills"
      className={`w-full min-h-screen py-14 bg-gradient-to-br from-gray-950 via-slate-950 to-gray-900 relative transition-all duration-1000 ${
        visibleSections.has("skills") ? "opacity-100" : "opacity-30"
      }`}
    >
      <div className="flex items-center justify-center lg:justify-between h-full relative px-8 lg:px-16 z-50">
        <div className="max-w-2xl">
          <div
            className={`welcome text-xs md:text-sm tracking-[0.15em] text-gray-400 font-semibold mb-3 uppercase transition-all duration-700 ${
              visibleSections.has("skills")
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            My Skills
          </div>
          <div
            className={`title text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-700 ${
              visibleSections.has("skills")
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </div>

          <div
            className={`description text-gray-300 text-xs md:text-sm lg:text-base leading-relaxed max-w-lg mb-6 font-light transition-all duration-700 ${
              visibleSections.has("skills")
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Comprehensive skill set in modern web development technologies. From
            frontend frameworks to backend architectures, I bring versatility
            and depth to every project.
          </div>

          <div
            className={`skills-categories space-y-6 transition-all duration-700 ${
              visibleSections.has("skills")
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {/* Frontend Skills */}
            <div
              className={`frontend-section transition-all duration-700 ${
                visibleSections.has("skills")
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                <div
                  className={`w-3 h-3 bg-blue-400 rounded-full transition-all duration-500 ${
                    visibleSections.has("skills") ? "scale-100" : "scale-0"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                ></div>
                Frontend Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { name: "React.js", level: "90%" },
                  { name: "Next.js", level: "85%" },
                  { name: "JavaScript", level: "92%" },
                  { name: "TypeScript", level: "80%" },
                  { name: "HTML5", level: "95%" },
                  { name: "CSS3", level: "88%" },
                ].map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-3 hover:border-blue-400/40 hover:scale-105 transition-all duration-500 cursor-pointer group ${
                      visibleSections.has("skills")
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-0"
                    }`}
                    style={{ transitionDelay: `${700 + index * 100}ms` }}
                  >
                    <div className="text-sm text-gray-300 font-medium mb-1 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                      <div
                        className={`bg-gradient-to-r from-blue-400 to-purple-400 h-1.5 rounded-full transition-all duration-1500 ${
                          visibleSections.has("skills")
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                        style={{
                          width: visibleSections.has("skills")
                            ? skill.level
                            : "0%",
                          transitionDelay: `${1000 + index * 150}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div
              className={`backend-section transition-all duration-700 ${
                visibleSections.has("skills")
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: "1200ms" }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
                <div
                  className={`w-3 h-3 bg-purple-400 rounded-full transition-all duration-500 ${
                    visibleSections.has("skills") ? "scale-100" : "scale-0"
                  }`}
                  style={{ transitionDelay: "1300ms" }}
                ></div>
                Backend Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { name: "Node.js", level: "88%" },
                  { name: "Express.js", level: "85%" },
                  { name: "MongoDB", level: "82%" },
                  { name: "MySQL", level: "75%" },
                  { name: "REST APIs", level: "90%" },
                  { name: "GraphQL", level: "70%" },
                ].map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-lg p-3 hover:border-purple-400/40 hover:scale-105 transition-all duration-500 cursor-pointer group ${
                      visibleSections.has("skills")
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-0"
                    }`}
                    style={{ transitionDelay: `${1400 + index * 100}ms` }}
                  >
                    <div className="text-sm text-gray-300 font-medium mb-1 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                      <div
                        className={`bg-gradient-to-r from-purple-400 to-cyan-400 h-1.5 rounded-full transition-all duration-1500 ${
                          visibleSections.has("skills")
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                        style={{
                          width: visibleSections.has("skills")
                            ? skill.level
                            : "0%",
                          transitionDelay: `${1700 + index * 150}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div
              className={`tools-section transition-all duration-700 ${
                visibleSections.has("skills")
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: "1900ms" }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                <div
                  className={`w-3 h-3 bg-cyan-400 rounded-full transition-all duration-500 ${
                    visibleSections.has("skills") ? "scale-100" : "scale-0"
                  }`}
                  style={{ transitionDelay: "2000ms" }}
                ></div>
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Git & GitHub",
                  "VS Code",
                  "Postman",
                  "Docker",
                  "AWS",
                  "Vercel",
                  "Tailwind CSS",
                  "Bootstrap",
                ].map((tool, index) => (
                  <div
                    key={tool}
                    className={`bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg px-3 py-2 text-center hover:border-cyan-400/40 hover:scale-105 transition-all duration-500 cursor-pointer group ${
                      visibleSections.has("skills")
                        ? "scale-100 opacity-100 rotate-0"
                        : "scale-90 opacity-0 rotate-3"
                    }`}
                    style={{ transitionDelay: `${2100 + index * 100}ms` }}
                  >
                    <span className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-3 lg:gap-4 items-start sm:items-center mt-8 transition-all duration-700 ${
              visibleSections.has("skills")
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "2800ms" }}
          >
            <a
              href="#projects"
              className="inline-block transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <HoverBorderGradient className="px-6 py-3 text-sm font-medium shadow-lg hover:shadow-blue-500/25">
                See Projects
              </HoverBorderGradient>
            </a>
            <a
              href="#contact"
              className="inline-block transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <HoverBorderGradient className="flex items-center gap-2 px-6 py-3 text-sm font-medium shadow-lg hover:shadow-purple-500/25">
                Hire Me
              </HoverBorderGradient>
            </a>
          </div>
        </div>

        {/* Skills Visualization */}
        <div
          className={`hidden lg:flex w-full h-full items-center justify-center relative max-w-md transition-all duration-1000 ${
            visibleSections.has("skills")
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="relative w-80 h-80">
            {/* Circular Progress Indicators */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Main Circle */}
                <div
                  className={`w-64 h-64 rounded-full border-4 border-blue-500/20 flex items-center justify-center transition-all duration-1000 hover:border-blue-500/40 ${
                    visibleSections.has("skills")
                      ? "scale-100 opacity-100 rotate-0"
                      : "scale-50 opacity-0 rotate-180"
                  }`}
                  style={{ transitionDelay: "2900ms" }}
                >
                  <div
                    className={`w-48 h-48 rounded-full border-4 border-purple-500/20 flex items-center justify-center transition-all duration-1000 hover:border-purple-500/40 ${
                      visibleSections.has("skills")
                        ? "scale-100 opacity-100 rotate-0"
                        : "scale-50 opacity-0 -rotate-180"
                    }`}
                    style={{ transitionDelay: "3000ms" }}
                  >
                    <div
                      className={`w-32 h-32 rounded-full border-4 border-cyan-500/20 flex items-center justify-center transition-all duration-1000 hover:border-cyan-500/40 ${
                        visibleSections.has("skills")
                          ? "scale-100 opacity-100 rotate-0"
                          : "scale-50 opacity-0 rotate-180"
                      }`}
                      style={{ transitionDelay: "3100ms" }}
                    >
                      <div
                        className={`text-center transition-all duration-700 ${
                          visibleSections.has("skills")
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                        }`}
                        style={{ transitionDelay: "3200ms" }}
                      >
                        <div className="text-2xl font-bold text-white mb-1">
                          3+
                        </div>
                        <div className="text-sm text-gray-400">Years</div>
                        <div className="text-sm text-gray-400">Experience</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Skill Tags */}
                <div
                  className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-3 py-1 hover:scale-110 transition-all duration-500 cursor-pointer group ${
                    visibleSections.has("skills")
                      ? "scale-100 opacity-100 translate-y-0"
                      : "scale-0 opacity-0 -translate-y-4"
                  }`}
                  style={{ transitionDelay: "3300ms" }}
                >
                  <span className="text-xs text-blue-300 font-medium group-hover:text-blue-200 transition-colors duration-300">
                    React
                  </span>
                </div>
                <div
                  className={`absolute top-1/4 -right-6 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full px-3 py-1 hover:scale-110 transition-all duration-500 cursor-pointer group ${
                    visibleSections.has("skills")
                      ? "scale-100 opacity-100 translate-x-0"
                      : "scale-0 opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: "3400ms" }}
                >
                  <span className="text-xs text-purple-300 font-medium group-hover:text-purple-200 transition-colors duration-300">
                    Node.js
                  </span>
                </div>
                <div
                  className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-3 py-1 hover:scale-110 transition-all duration-500 cursor-pointer group ${
                    visibleSections.has("skills")
                      ? "scale-100 opacity-100 translate-y-0"
                      : "scale-0 opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "3500ms" }}
                >
                  <span className="text-xs text-cyan-300 font-medium group-hover:text-cyan-200 transition-colors duration-300">
                    MongoDB
                  </span>
                </div>
                <div
                  className={`absolute top-1/4 -left-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full px-3 py-1 hover:scale-110 transition-all duration-500 cursor-pointer group ${
                    visibleSections.has("skills")
                      ? "scale-100 opacity-100 translate-x-0"
                      : "scale-0 opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: "3600ms" }}
                >
                  <span className="text-xs text-green-300 font-medium group-hover:text-green-200 transition-colors duration-300">
                    Express
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
