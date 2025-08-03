"use client";

import React, { useState, useEffect } from "react";
import Spotlight from "@/components/main/spotlight";
import Loader from "@/components/main/loader";
import Contact from "@/components/main/contact";
import Footer from "@/components/main/footer";
import Home from "@/components/main/home";
import About from "@/components/main/about";
import Skills from "@/components/main/skills";
import Educations from "@/components/main/educations";
import Project from "@/components/main/project";

function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const [scrollProgress, setScrollProgress] = useState(0);

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    // Only run on client side after loading is complete
    if (typeof window === "undefined" || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          console.log(sectionId);
          if (!sectionId) return;

          setVisibleSections((prev) => {
            const newSet = new Set(prev);
            if (entry.isIntersecting) {
              newSet.add(sectionId);
            } else {
              newSet.delete(sectionId);
            }
            return newSet;
          });
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px -50px 0px",
      }
    );

    // Larger delay to ensure all components are mounted
    const timeoutId = setTimeout(() => {
      const sections = document.querySelectorAll("section[id], div[id]");
      sections.forEach((section) => observer.observe(section));
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [isLoading]);

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  useEffect(() => {
    console.log(visibleSections);
  }, [visibleSections]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {/* Custom CSS Animations */}
      <style jsx global>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            overflow-x: hidden;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            overflow-x: hidden;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .hover-glow:hover {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }

        .glass-morphism {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .section-enter {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .section-enter-active {
          opacity: 1;
          transform: translateY(0);
        }

        /* Optimized Animation Classes */
        .animate-slide-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-left {
          animation: fade-in-left 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
          opacity: 0;
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .stagger-children > * {
          animation-delay: calc(var(--stagger-delay, 0) * 0.1s);
        }
      `}</style>

      <main className="flex min-h-screen pt-14c flex-col items-center justify-between relative">
        <Spotlight />

        <Home visibleSections={visibleSections} />

        <About visibleSections={visibleSections} />

        <Skills visibleSections={visibleSections} />

        <Educations visibleSections={visibleSections} />

        <Project visibleSections={visibleSections} />

        <Contact visibleSections={visibleSections} />

        {/* Floating Action Button */}
        <Footer scrollProgress={scrollProgress} />
      </main>
    </>
  );
}

export default Page;
