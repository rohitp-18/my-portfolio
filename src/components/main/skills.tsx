import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { Terminal } from "lucide-react";

function Skills({ visibleSections }: { visibleSections: Set<string> }) {
  return (
    <section
      id="skills"
      className={`w-full min-h-[990px] max-h-[1100px] h-screen py-14 bg-gradient-to-br from-gray-950 via-slate-950 to-gray-900 relative transition-all duration-1000 ${
        visibleSections.has("skills") ? "opacity-100" : "opacity-30"
      }`}
    >
      <div className="flex items-center justify-center lg:justify-normal h-full gap-10 relative px-8 lg:px-16 z-50">
        <div className="max-w-2xl flex-1">
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
            className={`title text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight transition-all duration-700 ${
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
                  "React.js",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Redux Toolkit",
                  "ShadCN",
                ].map((skill, index) => (
                  <div
                    key={skill}
                    className={`bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg px-3 py-2 hover:border-blue-400/40 hover:scale-105 transition-all duration-500 cursor-pointer group ${
                      visibleSections.has("skills")
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-0"
                    }`}
                    style={{ transitionDelay: `${700 + index * 100}ms` }}
                  >
                    <div className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                      {skill}
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
                Backend & Database
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "FastAPI",
                  "Socket.io",
                  "Mongoose",
                ].map((skill, index) => (
                  <div
                    key={skill}
                    className={`bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-lg px-3 py-2 hover:border-purple-400/40 hover:scale-105 transition-all duration-500 cursor-pointer group ${
                      visibleSections.has("skills")
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-0"
                    }`}
                    style={{ transitionDelay: `${1400 + index * 100}ms` }}
                  >
                    <div className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Generative AI Skills */}
            <div
              className={`ai-section transition-all duration-700 ${
                visibleSections.has("skills")
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: "1900ms" }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-yellow-400 mb-4 flex items-center gap-2">
                <div
                  className={`w-3 h-3 bg-yellow-400 rounded-full transition-all duration-500 ${
                    visibleSections.has("skills") ? "scale-100" : "scale-0"
                  }`}
                  style={{ transitionDelay: "2000ms" }}
                ></div>
                Generative AI
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "LangChain",
                  "RAG Pipelines",
                  "Vector DBs (Pinecone)",
                  "Python",
                  "Gemini API",
                ].map((skill, index) => (
                  <div
                    key={skill}
                    className={`bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg px-3 py-2 hover:border-yellow-400/40 hover:scale-105 transition-all duration-500 cursor-pointer group ${
                      visibleSections.has("skills")
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-0"
                    }`}
                    style={{ transitionDelay: `${2100 + index * 100}ms` }}
                  >
                    <div className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps & Tools */}
            <div
              className={`tools-section transition-all duration-700 ${
                visibleSections.has("skills")
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: "2600ms" }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                <div
                  className={`w-3 h-3 bg-cyan-400 rounded-full transition-all duration-500 ${
                    visibleSections.has("skills") ? "scale-100" : "scale-0"
                  }`}
                  style={{ transitionDelay: "2700ms" }}
                ></div>
                DevOps & Tools
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Docker",
                  "AWS EC2",
                  "Nginx",
                  "Git/GitHub",
                  "Postman",
                  "Linux",
                ].map((tool, index) => (
                  <div
                    key={tool}
                    className={`bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg px-3 py-2 text-center hover:border-cyan-400/40 hover:scale-105 transition-all duration-500 cursor-pointer group ${
                      visibleSections.has("skills")
                        ? "scale-100 opacity-100 rotate-0"
                        : "scale-90 opacity-0 rotate-3"
                    }`}
                    style={{ transitionDelay: `${2800 + index * 100}ms` }}
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
            style={{ transitionDelay: "3400ms" }}
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
        <div className="relative h-full lg:flex hidden items-center flex-1 justify-center">
          {/* Decorative Glow Behind */}
          <div className="absolute inset-0 bg-blue-600/20 blur-[100px] max-w-96 rounded-full opacity-50"></div>

          {/* Code Window */}
          <div className="relative w-full max-w-96 bg-[#1e1e1e] rounded-xl shadow-2xl border border-slate-700 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-slate-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs text-gray-400 font-mono flex items-center gap-2">
                <Terminal size={12} />
                rohit_config.ts
              </div>
            </div>

            {/* Code Content */}
            <div className="xl:p-6 p-4 font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
              <div className="space-y-1">
                <div className="flex">
                  <span className="text-pink-400 mr-2">const</span>
                  <span className="text-blue-300">developer</span>
                  <span className="text-white mx-2">=</span>
                  <span className="text-yellow-300">{`{`}</span>
                </div>

                <div className="pl-6">
                  <span className="text-blue-300">name:</span>
                  <span className="text-green-300 ml-2">"Rohit Patil"</span>,
                </div>

                <div className="pl-6">
                  <span className="text-blue-300">role:</span>
                  <span className="text-green-300 ml-2">
                    "Full Stack GenAI Developer"
                  </span>
                  ,
                </div>

                <div className="pl-6">
                  <span className="text-blue-300">stack:</span>
                  <span className="text-yellow-300 ml-2">[</span>
                </div>
                <div className="pl-12 text-green-300">
                  "Next.js", "TypeScript", "Node.js"
                  <br />
                </div>
                <div className="pl-6 text-yellow-300">],</div>

                <div className="pl-6">
                  <span className="text-blue-300">ai_expertise:</span>
                  <span className="text-yellow-300 ml-2">[</span>
                </div>
                <div className="pl-12 text-green-300">
                  "LangChain", "RAG", "Vector DBs"
                  <br />
                </div>
                <div className="pl-6 text-yellow-300">],</div>

                <div className="pl-6">
                  <span className="text-blue-300">infrastructure:</span>
                  <span className="text-yellow-300 ml-2">{`{`}</span>
                </div>
                <div className="pl-12">
                  <span className="text-blue-300">cloud:</span>
                  <span className="text-green-300 ml-2">"AWS EC2"</span>,
                </div>
                <div className="pl-12">
                  <span className="text-blue-300">container:</span>
                  <span className="text-green-300 ml-2">"Docker"</span>,
                </div>
                <div className="pl-12">
                  <span className="text-blue-300">server:</span>
                  <span className="text-green-300 ml-2">"Nginx"</span>
                </div>
                <div className="pl-6 text-yellow-300">{`}`},</div>

                <div className="pl-6">
                  <span className="text-blue-300">hard_worker:</span>
                  <span className="text-orange-400 ml-2">true</span>
                </div>

                <div className="text-yellow-300">{`};`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
