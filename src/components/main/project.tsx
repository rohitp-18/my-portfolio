import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

function Project({ visibleSections }: { visibleSections: Set<string> }) {
  return (
    <section
      id="projects"
      className={`w-full min-h-min max-h-max h-screen py-14 bg-gradient-to-br from-gray-950 via-slate-950 to-gray-900 relative transition-all duration-1000 ${
        visibleSections.has("projects") ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-start justify-center lg:justify-between min-h-screen relative sm:px-8 px-4 lg:px-16 z-50">
        <div className="w-full max-w-7xl">
          <div
            className={`welcome text-xs md:text-sm tracking-[0.15em] text-gray-400 font-semibold mb-3 uppercase ${
              visibleSections.has("projects") ? "animate-slide-up" : ""
            }`}
            style={{ "--stagger-delay": "1" } as React.CSSProperties}
          >
            My Projects
          </div>
          <div
            className={`title text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight ${
              visibleSections.has("projects") ? "animate-slide-up" : ""
            }`}
            style={{ "--stagger-delay": "2" } as React.CSSProperties}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Work
            </span>
          </div>

          <div
            className={`description text-gray-300 text-xs md:text-sm lg:text-base leading-relaxed max-w-lg mb-6 font-light ${
              visibleSections.has("projects") ? "animate-slide-up" : ""
            }`}
            style={{ "--stagger-delay": "3" } as React.CSSProperties}
          >
            Showcasing real-world applications and innovative solutions built
            with modern technologies. Each project demonstrates expertise in
            full-stack development, user experience design, and industry best
            practices.
          </div>

          <div className="flex justify-between w-full items-start flex-col lg:flex-row gap-8">
            <div className="space-y-6 lg:space-y-8 w-full lg:w-2/3">
              {/* Project Categories */}
              <div
                className={`overflow-hidden ${
                  visibleSections.has("projects") ? "animate-slide-left" : ""
                }`}
                style={{ "--stagger-delay": "4" } as React.CSSProperties}
              >
                <h3 className="text-lg md:text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  Project Categories
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 overflow-hidden gap-3 stagger-children min-w-0">
                  {[
                    { name: "Web Applications", count: "6+" },
                    { name: "E-Commerce Sites", count: "1+" },
                    { name: "Mobile Apps", count: "1+" },
                    { name: "Dashboard UIs", count: "2+" },
                    { name: "API Development", count: "5+" },
                    { name: "Deployment", count: "3+" },
                  ].map((category, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-lg p-3 text-center hover:border-purple-400/40 transition-all duration-300 hover:scale-105 cursor-pointer group ${
                        visibleSections.has("projects")
                          ? "animate-scale-in"
                          : ""
                      }`}
                      style={
                        {
                          "--stagger-delay": `${5 + index}`,
                        } as React.CSSProperties
                      }
                    >
                      <div className="text-sm text-white font-medium mb-1 group-hover:text-purple-300 transition-colors duration-300">
                        {category.name}
                      </div>
                      <div className="text-xs text-purple-400 font-semibold group-hover:text-purple-300 transition-colors duration-300">
                        {category.count}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div
                className={`tech-stack ${
                  visibleSections.has("projects") ? "animate-slide-left" : ""
                }`}
                style={{ "--stagger-delay": "11" } as React.CSSProperties}
              >
                <h3 className="text-lg md:text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  Project Highlights
                </h3>
                <div className="space-y-3 stagger-children">
                  <div
                    className={`flex items-start gap-3 group hover:bg-cyan-500/5 p-3 rounded-lg transition-all duration-300 cursor-pointer ${
                      visibleSections.has("projects") ? "animate-scale-in" : ""
                    }`}
                    style={{ "--stagger-delay": "12" } as React.CSSProperties}
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                    <div>
                      <h4 className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors duration-300">
                        Full-Stack Development
                      </h4>
                      <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Complete web applications with frontend, backend, and
                        database integration
                      </p>
                    </div>
                  </div>
                  <div
                    className={`flex items-start gap-3 group hover:bg-purple-500/5 p-3 rounded-lg transition-all duration-300 cursor-pointer ${
                      visibleSections.has("projects") ? "animate-scale-in" : ""
                    }`}
                    style={{ "--stagger-delay": "13" } as React.CSSProperties}
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                    <div>
                      <h4 className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors duration-300">
                        Modern UI/UX Design
                      </h4>
                      <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Responsive designs with modern aesthetics and optimal
                        user experience
                      </p>
                    </div>
                  </div>
                  <div
                    className={`flex items-start gap-3 group hover:bg-cyan-500/5 p-3 rounded-lg transition-all duration-300 cursor-pointer ${
                      visibleSections.has("projects") ? "animate-scale-in" : ""
                    }`}
                    style={{ "--stagger-delay": "14" } as React.CSSProperties}
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                    <div>
                      <h4 className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors duration-300">
                        Production Deployment
                      </h4>
                      <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Live applications with automated deployment and scalable
                        infrastructure
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project Stats Visualization */}
            <div className="hidden lg:flex w-full lg:w-1/3 items-center justify-center relative">
              <div className="relative w-80 h-80">
                {/* Project Portfolio Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Main Portfolio Circle */}
                    <div
                      className={`w-64 h-64 rounded-full border-4 border-blue-500/20 flex items-center justify-center relative transition-all duration-1000 ${
                        visibleSections.has("projects")
                          ? "animate-pulse-slow scale-100 opacity-100"
                          : "scale-75 opacity-0"
                      }`}
                    >
                      <div
                        className={`w-48 h-48 rounded-full border-4 border-purple-500/20 flex items-center justify-center transition-all duration-1000 delay-300 ${
                          visibleSections.has("projects")
                            ? "animate-pulse-slow scale-100 opacity-100"
                            : "scale-75 opacity-0"
                        }`}
                      >
                        <div
                          className={`w-32 h-32 rounded-full border-4 border-cyan-500/20 flex items-center justify-center transition-all duration-1000 delay-500 ${
                            visibleSections.has("projects")
                              ? "animate-pulse-slow scale-100 opacity-100"
                              : "scale-75 opacity-0"
                          }`}
                        >
                          <div
                            className={`text-center transition-all duration-1000 delay-700 ${
                              visibleSections.has("projects")
                                ? "animate-scale-in opacity-100"
                                : "opacity-0"
                            }`}
                          >
                            <div className="text-2xl font-bold text-white mb-1 animate-bounce-slow">
                              9+
                            </div>
                            <div className="text-sm text-gray-400">
                              Projects
                            </div>
                            <div className="text-sm text-gray-400">
                              Completed
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Project Type Indicators */}
                      <div
                        className={`absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full flex items-center justify-center transition-all duration-1000 delay-700 hover:scale-110 hover:border-blue-400/50 ${
                          visibleSections.has("projects")
                            ? "animate-float opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-4"
                        }`}
                      >
                        <span className="text-xs text-blue-300 font-bold">
                          Web
                        </span>
                      </div>
                      <div
                        className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center transition-all duration-1000 delay-900 hover:scale-110 hover:border-cyan-400/50 ${
                          visibleSections.has("projects")
                            ? "animate-float opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
                      >
                        <span className="text-xs text-cyan-300 font-bold">
                          API
                        </span>
                      </div>
                    </div>

                    {/* Project Technology Tags */}
                    <div
                      className={`absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-3 py-1 transition-all duration-1000 delay-1000 hover:scale-105 hover:border-blue-400/50 ${
                        visibleSections.has("projects")
                          ? "animate-float-reverse opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-4"
                      }`}
                    >
                      <span className="text-xs text-blue-300 font-medium">
                        React
                      </span>
                    </div>
                    <div
                      className={`absolute top-1/4 -right-8 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full px-3 py-1 transition-all duration-1000 delay-1100 hover:scale-105 hover:border-purple-400/50 ${
                        visibleSections.has("projects")
                          ? "animate-float opacity-100 translate-x-0"
                          : "opacity-0 translate-x-4"
                      }`}
                    >
                      <span className="text-xs text-purple-300 font-medium">
                        Next.js
                      </span>
                    </div>
                    <div
                      className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-3 py-1 transition-all duration-1000 delay-1200 hover:scale-105 hover:border-cyan-400/50 ${
                        visibleSections.has("projects")
                          ? "animate-float-reverse opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <span className="text-xs text-cyan-300 font-medium">
                        Node.js
                      </span>
                    </div>
                    <div
                      className={`absolute top-1/4 -left-8 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full px-3 py-1 transition-all duration-1000 delay-1300 hover:scale-105 hover:border-green-400/50 ${
                        visibleSections.has("projects")
                          ? "animate-float opacity-100 -translate-x-0"
                          : "opacity-0 -translate-x-4"
                      }`}
                    >
                      <span className="text-xs text-green-300 font-medium">
                        MongoDB
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Statistics */}
                <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-4">
                  <div
                    className={`bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-3 text-center transition-all duration-1000 delay-1400 hover:scale-105 hover:border-blue-400/40 hover:bg-blue-500/20 ${
                      visibleSections.has("projects")
                        ? "animate-slide-up opacity-100"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <div className="text-lg font-bold text-blue-400">100%</div>
                    <div className="text-xs text-gray-300">Deployed</div>
                  </div>
                  <div
                    className={`bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-lg p-3 text-center transition-all duration-1000 delay-1500 hover:scale-105 hover:border-purple-400/40 hover:bg-purple-500/20 ${
                      visibleSections.has("projects")
                        ? "animate-slide-up opacity-100"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <div className="text-lg font-bold text-purple-400">5★</div>
                    <div className="text-xs text-gray-300">Client Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Featured Projects */}
          <div
            className={`featured-projects mt-8 ${
              visibleSections.has("projects") ? "animate-slide-up" : ""
            }`}
            style={{ "--stagger-delay": "8" } as React.CSSProperties}
          >
            <h3 className="text-lg md:text-xl font-semibold text-blue-400 mb-6 flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "E-Commerce Platform",
                  stack: "MERN Stack",
                  description:
                    "E-commerce platform with user authentication, dashboards for admin and sellers, and inventory management. Built for real-world deployment.",
                  technologies: ["React", "Node.js", "MongoDB", "SCSS"],
                  gradient: "from-blue-500/10 to-purple-500/10",
                  border: "border-blue-500/20",
                  hoverBorder: "hover:border-blue-400/40",
                  stackColor: "text-blue-400",
                  liveColor: "text-blue-400 hover:text-blue-300",
                  techBg: "bg-blue-500/20",
                  techText: "text-blue-300",
                  liveUrl: "https://e-commerce-r.onrender.com/",
                  githubUrl: "https://github.com/rohitp-18/e-commerce",
                },
                {
                  title: "Social Networking Website",
                  stack: "Next.js + Express",
                  description:
                    "Social platform with user profiles, resume links, job portal, groups, and company pages for networking and career growth.",
                  technologies: ["React", "TypeScript", "Next.js", "MongoDB"],
                  gradient: "from-cyan-500/10 to-blue-500/10",
                  border: "border-cyan-500/20",
                  hoverBorder: "hover:border-cyan-400/40",
                  stackColor: "text-cyan-400",
                  liveColor: "text-cyan-400 hover:text-cyan-300",
                  techBg: "bg-cyan-500/20",
                  techText: "text-cyan-300",
                  // liveUrl: "https://social-network-demo.example.com",
                  githubUrl: "https://github.com/rohitp-18/social-media",
                },
                {
                  title: "Portfolio Website",
                  stack: "Next.js + TypeScript",
                  description:
                    "Modern, responsive portfolio with advanced animations, dark theme, and optimized performance. Built with latest web technologies.",
                  technologies: [
                    "Next.js",
                    "TypeScript",
                    "Tailwind",
                    "Framer Motion",
                  ],
                  gradient: "from-green-500/10 to-blue-500/10",
                  border: "border-green-500/20",
                  hoverBorder: "hover:border-green-400/40",
                  stackColor: "text-green-400",
                  liveColor: "text-green-400 hover:text-green-300",
                  techBg: "bg-green-500/20",
                  techText: "text-green-300",
                  liveUrl: "https://rohit-patil.vercel.app",
                  githubUrl: "https://github.com/rohitp-18/my-portfolio",
                },
                {
                  title: "Real-Time Chat Website",
                  stack: "MERN + Socket.io",
                  description:
                    "Real-time chat application for instant messaging between users.",
                  technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
                  gradient: "from-orange-500/10 to-red-500/10",
                  border: "border-orange-500/20",
                  hoverBorder: "hover:border-orange-400/40",
                  stackColor: "text-orange-400",
                  liveColor: "text-orange-400 hover:text-orange-300",
                  techBg: "bg-orange-500/20",
                  techText: "text-orange-300",
                  // liveUrl: "https://chat-demo.example.com",
                  githubUrl: "https://github.com/rohitp-18/chat",
                },
                {
                  title: "Expense Management Website",
                  stack: "MERN STACK",
                  description:
                    "Track and visualize your transactions with interactive graphs and analytics.",
                  technologies: [
                    "React.js",
                    "Node.js",
                    "MongoDB",
                    "MUI library",
                  ],
                  gradient: "from-indigo-500/10 to-purple-500/10",
                  border: "border-indigo-500/20",
                  hoverBorder: "hover:border-indigo-400/40",
                  stackColor: "text-indigo-400",
                  liveColor: "text-indigo-400 hover:text-indigo-300",
                  techBg: "bg-indigo-500/20",
                  techText: "text-indigo-300",
                  hideMobile: true,
                  // liveUrl: "https://expense-demo.example.com",
                  githubUrl: "https://github.com/rohitp-18/expense_tracker",
                },
                {
                  title: "To Do - Task Management App",
                  stack: "React.js + Node.js",
                  description:
                    "Organize and track your tasks with drag-and-drop functionality for easy management.",
                  technologies: [
                    "TypeScript",
                    "React.js",
                    "Node.js",
                    "MongoDB",
                  ],
                  gradient: "from-purple-500/10 to-cyan-500/10",
                  border: "border-purple-500/20",
                  hoverBorder: "hover:border-purple-400/40",
                  stackColor: "text-purple-400",
                  liveColor: "text-purple-400 hover:text-purple-300",
                  techBg: "bg-purple-500/20",
                  techText: "text-purple-300",
                  hideMobile: true,
                  liveUrl: "https://todo-task-web.onrender.com/",
                  githubUrl: "https://github.com/rohitp-18/todo-typescript",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className={`group ${
                    project.hideMobile ? "hidden lg:flex" : ""
                  } bg-gradient-to-r ${project.gradient} border ${
                    project.border
                  } ${
                    project.hoverBorder
                  } rounded-xl p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 cursor-pointer h-full flex flex-col ${
                    visibleSections.has("projects") ? "animate-scale-in" : ""
                  }`}
                  style={
                    {
                      "--stagger-delay": `${9 + index}`,
                    } as React.CSSProperties
                  }
                >
                  {/* Project Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white group-hover:text-gray-100 transition-colors duration-300 mb-1">
                        {project.title}
                      </h4>
                      <span
                        className={`text-sm ${project.stackColor} font-semibold uppercase tracking-wide`}
                      >
                        {project.stack}
                      </span>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 leading-relaxed mb-4 flex-1 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs ${project.techBg} ${project.techText} px-3 py-1 rounded-full font-medium hover:scale-105 transition-transform duration-200`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 text-sm mt-auto pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        project.liveUrl
                          ? project.liveColor
                          : "text-gray-500 cursor-not-allowed opacity-60"
                      } transition-colors duration-300 font-medium hover:underline flex items-center gap-1`}
                      tabIndex={project.liveUrl ? 0 : -1}
                      aria-disabled={!project.liveUrl}
                      onClick={(e) => {
                        if (!project.liveUrl) e.preventDefault();
                      }}
                    >
                      <span>Live Demo</span>
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-300 transition-colors duration-300 font-medium hover:underline flex items-center gap-1"
                    >
                      <span>GitHub</span>
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Project footer buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-3 lg:gap-4 items-start sm:items-center mt-8 ${
              visibleSections.has("projects") ? "animate-slide-up" : ""
            }`}
            style={{ "--stagger-delay": "15" } as React.CSSProperties}
          >
            <a
              href="https://github.com/rohitp-18"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <HoverBorderGradient className="px-6 py-3 text-sm font-medium shadow-lg hover:shadow-blue-500/25">
                View All Projects
              </HoverBorderGradient>
            </a>
            <a
              href="#contact"
              className="inline-block transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <HoverBorderGradient className="flex items-center gap-2 px-6 py-3 text-sm font-medium shadow-lg hover:shadow-purple-500/25">
                Start Project
              </HoverBorderGradient>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
