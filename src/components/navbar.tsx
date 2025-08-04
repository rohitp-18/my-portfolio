"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconDownload,
  IconMail,
} from "@tabler/icons-react";
import { useState, useEffect } from "react";

function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    { name: "Skills", link: "#skills" },
    { name: "Education", link: "#education" },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [scrollProgress, setScrollProgress] = useState(0);

  // // Scroll progress tracking for navbar
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const docHeight =
  //       document.documentElement.scrollHeight - window.innerHeight;
  //     const scrollPercent = (scrollTop / docHeight) * 100;
  //     setScrollProgress(scrollPercent);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      {/* <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-800 to-gray-700 z-[110]">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div> */}

      <Navbar className="fixed top-5 z-[100]">
        {/* Desktop Navigation */}
        <NavBody className="backdrop-blur-md bg-gray-950/90 border border-blue-500/30 rounded-2xl shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-500">
          <NavbarLogo />
          <NavItems items={navItems} />

          {/* Enhanced Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Social Icons with Hover Effects */}
            <a
              href="https://github.com/rohitp-18"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 h-10 bg-gradient-to-r from-gray-600/20 to-gray-500/20 border border-gray-500/30 rounded-full flex items-center justify-center hover:border-gray-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25"
            >
              <IconBrandGithub
                size={18}
                className="text-gray-300 group-hover:text-white transition-colors duration-200"
              />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                GitHub
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/rohit-patil18/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 h-10 bg-gradient-to-r from-blue-600/20 to-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center hover:border-blue-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <IconBrandLinkedin
                size={18}
                className="text-blue-300 group-hover:text-blue-400 transition-colors duration-200"
              />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                LinkedIn
              </div>
            </a>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="backdrop-blur-md bg-gray-950/95 border border-blue-500/30 rounded-2xl shadow-2xl shadow-blue-500/20"
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative group text-gray-300 hover:text-blue-400 transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-blue-500/10 flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-blue-400/50 rounded-full group-hover:bg-blue-400 transition-colors duration-200"></div>
                <span className="block font-medium">{item.name}</span>
              </a>
            ))}

            {/* Mobile Action Buttons */}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-700/50">
              <a
                href="mailto:rohitpatil18@hotmail.com"
                className="flex items-center gap-3 text-blue-300 hover:text-blue-400 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-blue-500/10"
              >
                <IconMail size={18} />
                <span className="font-medium">Contact Me</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1GLDpmNMcONF3amydwF0jA7hOX-RjiRD4/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-purple-300 hover:text-purple-400 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-purple-500/10"
              >
                <IconDownload size={18} />
                <span className="font-medium">Download Resume</span>
              </a>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </>
  );
}

export default NavbarDemo;
