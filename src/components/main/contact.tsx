import { IconBrandWhatsapp } from "@tabler/icons-react";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { useContactForm } from "../../hooks/useContactForm";

function Contact({ visibleSections }: { visibleSections: Set<string> }) {
  const { formData, formState, updateField, submitForm } = useContactForm();
  return (
    <section
      id="contact"
      className={`w-full min-h-min max-h-max h-screen py-8 md:py-14 bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 relative transition-all duration-1000 ${
        visibleSections.has("contact") ? "opacity-100" : "opacity-50"
      }`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full relative px-4 sm:px-8 lg:px-16 z-50 gap-8 lg:gap-10">
        <div
          className={`w-full lg:max-w-xl transition-all duration-1000 delay-200 ${
            visibleSections.has("contact")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className={`welcome text-xs md:text-sm tracking-[0.15em] text-gray-400 font-semibold mb-3 uppercase transition-all duration-700 ${
              visibleSections.has("contact")
                ? "animate-slide-up opacity-100"
                : "opacity-0 translate-y-5"
            }`}
            style={{ "--stagger-delay": "0.1s" } as React.CSSProperties}
          >
            Get In Touch
          </div>
          <div
            className={`title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-700 delay-200 ${
              visibleSections.has("contact")
                ? "animate-slide-up opacity-100"
                : "opacity-0 translate-y-5"
            }`}
            style={{ "--stagger-delay": "0.2s" } as React.CSSProperties}
          >
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              Connect
            </span>
          </div>

          <div
            className={`description text-gray-300 text-sm md:text-base leading-relaxed max-w-lg mb-8 font-light transition-all duration-700 delay-300 ${
              visibleSections.has("contact")
                ? "animate-slide-up opacity-100"
                : "opacity-0 translate-y-5"
            }`}
            style={{ "--stagger-delay": "0.3s" } as React.CSSProperties}
          >
            Ready to bring your ideas to life? Let's discuss your project and
            explore how we can work together to create something amazing.
          </div>

          <div
            className={`contact-methods space-y-8 transition-all duration-700 delay-400 ${
              visibleSections.has("contact")
                ? "animate-slide-up opacity-100"
                : "opacity-0 translate-y-5"
            }`}
            style={{ "--stagger-delay": "0.4s" } as React.CSSProperties}
          >
            {/* Direct Contact */}
            <div
              className={`direct-contact overflow-hidden transition-all duration-700 delay-500 ${
                visibleSections.has("contact")
                  ? "animate-slide-left opacity-100"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ "--stagger-delay": "0.5s" } as React.CSSProperties}
            >
              <h3 className="text-lg md:text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                Direct Contact
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4 hover:border-blue-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10 glass-morphism animate-fade-in-up">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center animate-float">
                      <svg
                        className="w-4 h-4 text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-white">
                        Email
                      </h4>
                      <p className="text-xs text-gray-400">
                        Best for detailed project discussions
                      </p>
                    </div>
                  </div>
                  <a
                    href="mailto:rohitpatil18@hotmail.com"
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium break-all"
                  >
                    rohitpatil18@hotmail.com
                  </a>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-4 hover:border-green-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/10 glass-morphism animate-fade-in-up delay-100">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center animate-bounce-slow">
                      <IconBrandWhatsapp size={16} className="text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-white">
                        WhatsApp
                      </h4>
                      <p className="text-xs text-gray-400">
                        Quick questions and instant communication
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://api.whatsapp.com/send/?phone=919356971002&text=Hello%20Rohit!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-green-400 hover:text-green-300 transition-colors font-medium"
                  >
                    +91 93569 71002
                  </a>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-lg p-4 hover:border-purple-400/40 transition-all duration-300 hover:scale-[1.02] animate-fade-in-up delay-200">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center animate-spin-slow">
                      <svg
                        className="w-4 h-4 text-purple-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-white">
                        Location
                      </h4>
                      <p className="text-xs text-gray-400">
                        Available for remote work worldwide
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-purple-400 font-medium">
                    India (UTC+5:30)
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div
              className={`social-links transition-all duration-700 delay-600 ${
                visibleSections.has("contact")
                  ? "animate-slide-up opacity-100"
                  : "opacity-0 translate-y-5"
              }`}
            >
              <h3 className="text-lg md:text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                Professional Networks
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  {
                    name: "LinkedIn",
                    desc: "Professional",
                    href: "https://www.linkedin.com/in/rohit-patil18/",
                    color: "blue",
                    delay: "0",
                  },
                  {
                    name: "GitHub",
                    desc: "Code Portfolio",
                    href: "https://github.com/rohitp-18",
                    color: "gray",
                    delay: "100",
                  },
                  {
                    name: "Twitter",
                    desc: "Tech Updates",
                    href: "https://x.com/RohitPatil35383",
                    color: "cyan",
                    delay: "200",
                  },
                  {
                    name: "Instagram",
                    desc: "Behind Scenes",
                    href: "https://www.instagram.com/rohit_p.18/",
                    color: "pink",
                    delay: "300",
                  },
                ].map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gradient-to-r from-${social.color}-600/10 to-${social.color}-500/10 border border-${social.color}-500/20 rounded-lg p-3 text-center hover:border-${social.color}-400/40 transition-all duration-300 group animate-fade-in-up hover:scale-105 transform`}
                    style={{ animationDelay: `${social.delay}ms` }}
                  >
                    <div
                      className={`text-sm text-white font-medium mb-1 group-hover:text-${social.color}-400 transition-colors`}
                    >
                      {social.name}
                    </div>
                    <div className="text-xs text-gray-400">{social.desc}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Services Offered */}
            <div
              className={`services transition-all duration-700 delay-700 ${
                visibleSections.has("contact")
                  ? "animate-slide-up opacity-100"
                  : "opacity-0 translate-y-5"
              }`}
            >
              <h3 className="text-lg md:text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                What I Can Help With
              </h3>
              <div className="space-y-3">
                {[
                  {
                    title: "Custom Web Development",
                    desc: "Full-stack applications tailored to your business needs",
                    color: "blue",
                  },
                  {
                    title: "Technical Consultation",
                    desc: "Architecture planning and technology stack recommendations",
                    color: "purple",
                  },
                  {
                    title: "Code Review & Optimization",
                    desc: "Performance improvements and best practices implementation",
                    color: "cyan",
                  },
                  {
                    title: "Mentoring & Training",
                    desc: "MERN stack guidance for individuals and teams",
                    color: "green",
                  },
                ].map((service, index) => (
                  <div
                    key={service.title}
                    className={`flex items-start gap-3 animate-fade-in-right`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`w-2 h-2 bg-${service.color}-400 rounded-full mt-2 animate-pulse`}
                    ></div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-white hover:text-gray-200 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-3 lg:gap-4 items-stretch sm:items-center mt-8 transition-all duration-700 delay-800 ${
              visibleSections.has("contact")
                ? "animate-slide-up opacity-100"
                : "opacity-0 translate-y-5"
            }`}
          >
            <a
              href="mailto:rohitpatil18@hotmail.com?subject=Project%20Inquiry&body=Hi%20Rohit,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.%0A%0AProject%20Details:%0A-%20Type:%20%0A-%20Timeline:%20%0A-%20Budget:%20%0A%0APlease%20let%20me%20know%20your%20availability.%0A%0AThank%20you!"
              className="inline-block flex-1 sm:flex-none animate-bounce-gentle"
            >
              <HoverBorderGradient className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-center">
                Send Email
              </HoverBorderGradient>
            </a>
            <a
              href="https://drive.google.com/file/d/1GLDpmNMcONF3amydwF0jA7hOX-RjiRD4/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block flex-1 sm:flex-none animate-bounce-gentle delay-200"
            >
              <HoverBorderGradient className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium">
                Download Resume
              </HoverBorderGradient>
            </a>
          </div>
        </div>

        {/* Contact Form/Info Visual */}
        <div
          className={`w-full lg:flex lg:h-full items-center justify-center relative max-w-md mx-auto lg:mx-0 transition-all duration-1000 delay-300 ${
            visibleSections.has("contact")
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <div className="w-full max-w-md">
            {/* Contact Form */}
            <div className="bg-gradient-to-br w-full from-gray-900/80 via-slate-900/80 to-gray-800/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-4 sm:p-6 shadow-2xl animate-scale-up">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-white mb-2 animate-fade-in">
                  Send Message
                </h3>
                <p className="text-sm text-gray-400 animate-fade-in delay-100">
                  Let's start a conversation
                </p>
              </div>

              <form onSubmit={submitForm} className="space-y-4">
                {/* Success/Error Messages */}
                {formState.isSuccess && (
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 animate-fade-in">
                    <p className="text-green-400 text-sm text-center">
                      ✅ Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                )}

                {formState.error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 animate-fade-in">
                    <p className="text-red-400 text-sm text-center">
                      ❌ {formState.error}
                    </p>
                  </div>
                )}

                {/* Name Field */}
                <div className="group animate-fade-in-up delay-200">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 group-hover:border-gray-500/70 focus:scale-[1.02]"
                  />
                </div>

                {/* Email Field */}
                <div className="group animate-fade-in-up delay-300">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/60 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 group-hover:border-gray-500/70 focus:scale-[1.02]"
                  />
                </div>

                {/* Subject Field */}
                <div className="group animate-fade-in-up delay-400">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => updateField("subject", e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 group-hover:border-gray-500/70 focus:scale-[1.02] appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                      backgroundSize: "16px",
                    }}
                  >
                    <option value="" className="bg-gray-800 text-gray-400">
                      Select a topic...
                    </option>
                    <option value="project" className="bg-gray-800 text-white">
                      💼 New Project
                    </option>
                    <option
                      value="freelance"
                      className="bg-gray-800 text-white"
                    >
                      🚀 Freelance Work
                    </option>
                    <option
                      value="collaboration"
                      className="bg-gray-800 text-white"
                    >
                      🤝 Collaboration
                    </option>
                    <option
                      value="consultation"
                      className="bg-gray-800 text-white"
                    >
                      💡 Technical Consultation
                    </option>
                    <option
                      value="mentorship"
                      className="bg-gray-800 text-white"
                    >
                      📚 Mentorship
                    </option>
                    <option value="feedback" className="bg-gray-800 text-white">
                      💬 Portfolio Feedback
                    </option>
                    <option
                      value="opportunity"
                      className="bg-gray-800 text-white"
                    >
                      🎯 Job Opportunity
                    </option>
                    <option value="other" className="bg-gray-800 text-white">
                      ✨ Other
                    </option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="group animate-fade-in-up delay-500">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400/60 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 resize-none group-hover:border-gray-500/70 focus:scale-[1.02]"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formState.isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-400/50 disabled:opacity-50 disabled:cursor-not-allowed group animate-fade-in-up delay-600"
                >
                  <span className="flex items-center justify-center gap-2">
                    {formState.isSubmitting ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                        Send Message
                      </>
                    )}
                  </span>
                </button>
              </form>

              {/* Quick Contact Options */}
              <div className="mt-6 pt-6 border-t border-gray-700/50 animate-fade-in-up delay-700">
                <p className="text-xs text-gray-400 text-center mb-3">
                  Or reach out directly
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href="mailto:rohitpatil18@hotmail.com"
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-300 hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-300 text-xs group hover:scale-105 transform"
                  >
                    <svg
                      className="w-3 h-3 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Email
                  </a>
                  <a
                    href="https://api.whatsapp.com/send/?phone=919356971002&text=Hello%20Rohit!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 hover:bg-green-500/30 hover:border-green-400/50 transition-all duration-300 text-xs group hover:scale-105 transform"
                  >
                    <IconBrandWhatsapp
                      size={12}
                      className="group-hover:scale-110 transition-transform"
                    />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Form Status Indicator */}
              <div className="mt-4 text-center animate-fade-in delay-800">
                <div className="inline-flex items-center gap-2 text-xs text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Usually responds within 24 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
