import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

function Experience({ visibleSections }: { visibleSections: Set<string> }) {
  return (
    <section
      id="experience"
      className={`w-full min-h-min max-h-max h-screen py-14 bg-gradient-to-br from-gray-950 via-slate-950 to-gray-900 relative transition-all duration-1000 ${
        visibleSections.has("experience") ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-start justify-center lg:justify-between relative sm:px-8 px-4 lg:px-16 z-50">
        <div className="w-full max-w-7xl">
          <div
            className={`welcome text-xs md:text-sm tracking-[0.15em] text-gray-400 font-semibold mb-3 uppercase ${
              visibleSections.has("experience") ? "animate-slide-up" : ""
            }`}
            style={{ "--stagger-delay": "1" } as React.CSSProperties}
          >
            Professional Journey
          </div>
          <div
            className={`title text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight ${
              visibleSections.has("experience") ? "animate-slide-up" : ""
            }`}
            style={{ "--stagger-delay": "2" } as React.CSSProperties}
          >
            Work{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </div>

          <div
            className={`description text-gray-300 text-xs md:text-sm lg:text-base leading-relaxed max-w-lg mb-6 font-light ${
              visibleSections.has("experience") ? "animate-slide-up" : ""
            }`}
            style={{ "--stagger-delay": "3" } as React.CSSProperties}
          >
            Diverse experience across organizations with proven technical
            expertise and track record of delivering impactful solutions.
          </div>

          {/* Work Experience Timeline */}
          <div
            className={`work-experience mt-8 ${
              visibleSections.has("experience") ? "animate-slide-up" : ""
            }`}
            style={{ "--stagger-delay": "8" } as React.CSSProperties}
          >
            <h3 className="text-lg md:text-xl font-semibold text-blue-400 mb-6 flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              Internship Experience
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                {
                  company: "Opineworks LLP",
                  position: "Frontend Developer Intern",
                  duration: "Aug 2025 - Oct 2025",
                  description: [
                    "Optimized the frontend performance by resolving critical Interface bugs.",
                    "Implemented new user-facing features using React.js, resulting in a smoother user experience.",
                  ],
                  technologies: ["React", "Webpack", "Babel", "Tailwind CSS"],
                  gradient: "from-cyan-500/10 to-blue-500/10",
                  border: "border-cyan-500/20",
                  hoverBorder: "hover:border-cyan-400/40",
                  companyColor: "text-cyan-400",
                  techBg: "bg-cyan-500/20",
                  techText: "text-cyan-300",
                },
                {
                  company: "Annaraj Foods Pvt Ltd",
                  position: "Full Stack Developer Intern",
                  duration: "Sep 2024 - Nov 2024",
                  description: [
                    "Developed the application for selling their product worldwide using MERN stack.",
                    "Integrated payment methods, cart section, order summary, designed platform to manage more than 2000 products.",
                  ],
                  technologies: [
                    "React",
                    "Node.js",
                    "Firebase",
                    "Tailwind CSS",
                  ],
                  gradient: "from-blue-500/10 to-purple-500/10",
                  border: "border-blue-500/20",
                  hoverBorder: "hover:border-blue-400/40",
                  companyColor: "text-blue-400",
                  techBg: "bg-blue-500/20",
                  techText: "text-blue-300",
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className={`group bg-gradient-to-r ${job.gradient} border ${
                    job.border
                  } ${
                    job.hoverBorder
                  } rounded-xl p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 cursor-pointer h-full flex flex-col ${
                    visibleSections.has("experience") ? "animate-scale-in" : ""
                  }`}
                  style={
                    {
                      "--stagger-delay": `${9 + index}`,
                    } as React.CSSProperties
                  }
                >
                  {/* Experience Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white group-hover:text-gray-100 transition-colors duration-300 mb-1">
                        {job.company}
                      </h4>
                      <span
                        className={`text-sm ${job.companyColor} font-semibold uppercase tracking-wide`}
                      >
                        {job.position}
                      </span>
                      <p className="text-xs text-gray-400 mt-1">
                        {job.duration}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Job Description */}
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 leading-relaxed mb-4 transition-colors duration-300">
                    {job.description.map((point, idx) => (
                      <span key={idx}>
                        ● {point}
                        <br />
                      </span>
                    ))}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs ${job.techBg} ${job.techText} px-3 py-1 rounded-full font-medium hover:scale-105 transition-transform duration-200`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div
            className={`flex flex-col sm:flex-row gap-3 lg:gap-4 items-start sm:items-center mt-8 ${
              visibleSections.has("experience") ? "animate-slide-up" : ""
            }`}
            style={{ "--stagger-delay": "15" } as React.CSSProperties}
          >
            <a
              href="#contact"
              className="inline-block transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <HoverBorderGradient className="px-6 py-3 text-sm font-medium shadow-lg hover:shadow-blue-500/25">
                Get In Touch
              </HoverBorderGradient>
            </a>
            <a
              href="https://linkedin.com/in/rohit-patil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <HoverBorderGradient className="flex items-center gap-2 px-6 py-3 text-sm font-medium shadow-lg hover:shadow-purple-500/25">
                View LinkedIn
              </HoverBorderGradient>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
