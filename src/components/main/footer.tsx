import { IconBrandWhatsapp } from "@tabler/icons-react";
import React from "react";

function Footer({ scrollProgress }: { scrollProgress: any }) {
  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://api.whatsapp.com/send/?phone=919356971002&text=Hello%20Rohit!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-green-500/50 animate-float group"
        >
          <IconBrandWhatsapp
            size={24}
            className="text-white group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute -top-12 right-0 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Quick Chat
          </div>
        </a>
      </div>

      {/* Scroll to Top Button */}
      <div
        className={`fixed bottom-6 left-6 z-[60] pointer-events-auto transition-all duration-500 ${
          scrollProgress > 10
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group relative w-12 h-12 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-500/20 rounded-full flex items-center justify-center hover:scale-110 transform transition-all duration-300 backdrop-blur-lg hover:border-blue-400/40 cursor-pointer shadow-lg hover:shadow-blue-500/25 glass-morphism"
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

          {/* Progress ring */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90">
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="transparent"
              stroke="rgba(59, 130, 246, 0.1)"
              strokeWidth="2"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="transparent"
              stroke="url(#progressGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${
                2 * Math.PI * 20 * (1 - scrollProgress / 100)
              }`}
              className="transition-all duration-300"
            />
            <defs>
              <linearGradient
                id="progressGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Arrow icon */}
          <svg
            className="w-5 h-5 text-blue-400 group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>

          {/* Tooltip */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap backdrop-blur-sm border border-gray-700/50">
            Back to top
          </div>

          {/* Floating animation dots */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-blue-400/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div
            className="absolute -bottom-1 -right-1 w-2 h-2 bg-purple-400/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </button>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-br from-gray-950 via-slate-950 to-black border-t border-gray-800/50 relative">
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 relative z-50">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Brand Section */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Rohit Patil
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  MERN Stack Developer
                </p>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-md mb-4">
                Passionate full-stack developer specializing in building modern,
                scalable web applications. Transforming ideas into digital
                solutions with cutting-edge technologies.
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <a
                  href="https://www.linkedin.com/in/rohit-patil18/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-colors"
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/rohitp-18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-500/20 rounded-full flex items-center justify-center hover:bg-gray-500/30 transition-colors"
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://x.com/RohitPatil35383"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-cyan-500/20 rounded-full flex items-center justify-center hover:bg-cyan-500/30 transition-colors"
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=919356971002&text=Hello%20Rohit!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-green-500/20 rounded-full flex items-center justify-center hover:bg-green-500/30 transition-colors"
                >
                  <IconBrandWhatsapp
                    size={14}
                    className="text-green-400 sm:w-4 sm:h-4"
                  />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-2 gap-2 flex w-full justify-between md:justify-around px-4 sm:px-0">
              <div className="col-span-1">
                <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm">
                  Quick Links
                </h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li>
                    <a
                      href="#home"
                      className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href="#education"
                      className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm"
                    >
                      Education
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="col-span-1">
                <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm">
                  Services
                </h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li>
                    <span className="text-gray-400 text-xs sm:text-sm">
                      Web Development
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-400 text-xs sm:text-sm">
                      Frontend Design
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-400 text-xs sm:text-sm">
                      Backend APIs
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-400 text-xs sm:text-sm">
                      Database Design
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-400 text-xs sm:text-sm">
                      Consultation
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-400 text-xs sm:text-sm">
                      Code Review
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="border-t border-gray-800/50 pt-6 sm:pt-8 mb-6 sm:mb-8">
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm text-center">
              Built With
            </h4>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                "React.js",
                "Next.js",
                "Node.js",
                "MongoDB",
                "Express.js",
                "TypeScript",
                "Tailwind CSS",
                "JavaScript",
                "PostgreSQL",
                "Git",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-gray-300 hover:border-blue-400/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="text-center">
              <div className="text-base sm:text-lg font-bold text-blue-400">
                2+
              </div>
              <div className="text-xs text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-base sm:text-lg font-bold text-purple-400">
                15+
              </div>
              <div className="text-xs text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-base sm:text-lg font-bold text-cyan-400">
                10+
              </div>
              <div className="text-xs text-gray-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-base sm:text-lg font-bold text-green-400">
                100%
              </div>
              <div className="text-xs text-gray-400">Client Satisfaction</div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800/50 pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              <p>&copy; 2025 Rohit Patil. All rights reserved.</p>
            </div>

            <div className="flex flex-col items-center gap-3 md:gap-4 w-full md:w-auto">
              <div className="flex items-center gap-2 sm:gap-4 text-xs text-gray-400 text-center">
                <span>Made with ❤️ in India</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">
                  Available for Remote Work
                </span>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <a
                  href="mailto:rohitpatil18@hotmail.com"
                  className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="mailto:rohitpatil18@hotmail.com"
                  className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          {/* Background Decoration */}
          <div className="absolute top-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>
        </div>

        {/* Footer Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-purple-500/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 bg-cyan-500/3 rounded-full blur-3xl"></div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
