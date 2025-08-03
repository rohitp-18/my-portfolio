"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Image from "next/image";

import React, { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn("sticky inset-x-0 top-20 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(16px)" : "blur(8px)",
        boxShadow: visible
          ? "0 0 32px rgba(59, 130, 246, 0.15), 0 0 64px rgba(147, 51, 234, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
          : "0 0 24px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        width: visible ? "45%" : "calc(100%-40px)",
        y: visible ? 15 : 0,
        scale: visible ? 0.98 : 1,
        borderColor: visible
          ? "rgba(59, 130, 246, 0.4)"
          : "rgba(59, 130, 246, 0.3)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      style={{
        minWidth: "850px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-[calc(100%-40px)] max-w-7xl flex-row items-center justify-between self-start rounded-2xl bg-gray-950/90 backdrop-blur-md border border-blue-500/30 px-6 py-3 lg:flex",
        "shadow-2xl shadow-blue-500/20",
        "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-blue-500/5 before:via-purple-500/5 before:to-cyan-500/5 before:opacity-50",
        visible && [
          "bg-gray-950/95",
          "border-blue-500/40",
          "shadow-blue-500/30",
        ],
        className
      )}
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: { name: string; link: string }
  ) => {
    e.preventDefault();

    // Handle smooth scrolling to target section
    const sectionId = item.link.startsWith("#")
      ? item.link.substring(1)
      : item.link;
    const section =
      document.getElementById(sectionId) || document.querySelector(item.link);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (onItemClick) {
      onItemClick();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      let foundIdx: number | null = null;

      items.forEach((item, idx) => {
        // Handle both hash links (#section) and regular selectors
        const sectionId = item.link.startsWith("#")
          ? item.link.substring(1)
          : item.link;
        const section =
          document.getElementById(sectionId) ||
          document.querySelector(item.link);

        if (section) {
          const rect = section.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementHeight = rect.height;

          if (
            scrollPos >= elementTop &&
            scrollPos < elementTop + elementHeight
          ) {
            foundIdx = idx;
          }
        }
      });
      setActiveIdx(foundIdx);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [items]);

  return (
    <motion.div
      style={{ marginLeft: "120px" }}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground lg:flex lg:space-x-1",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={(e) => handleNavClick(e, item)}
          className={cn(
            "relative px-4 py-2.5 text-gray-300 transition-all duration-300 hover:text-white rounded-lg group",
            activeIdx === idx && "text-blue-400 font-semibold"
          )}
          key={`link-${idx}`}
          href={item.link}
        >
          {/* Hover Background */}
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-lg border border-blue-500/20"
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            />
          )}

          {/* Active Background */}
          {activeIdx === idx && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-lg border border-blue-400/40 shadow-lg shadow-blue-500/20"
              transition={{ type: "spring", duration: 0.3 }}
            />
          )}

          {/* Navigation Dot Indicator */}
          <div
            className={cn(
              "absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-500 ease-out",
              activeIdx === idx ? "bg-blue-400 scale-125" : "bg-transparent",
              hovered === idx && activeIdx !== idx && "bg-gray-400 scale-100"
            )}
          />

          <span className="relative z-20 transition-all duration-300 group-hover:scale-105">
            {item.name}
          </span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(16px)" : "blur(8px)",
        boxShadow: visible
          ? "0 0 32px rgba(59, 130, 246, 0.15), 0 0 64px rgba(147, 51, 234, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
          : "0 0 24px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        width: visible ? "92%" : "100%",
        paddingRight: "16px",
        paddingLeft: "16px",
        borderRadius: visible ? "16px" : "24px",
        y: visible ? 15 : 0,
        scale: visible ? 0.98 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-gray-950/90 backdrop-blur-md border border-blue-500/30 px-4 py-3 rounded-2xl",
        "lg:hidden", // always hidden on lg and up
        "max-w-[720px]:flex", // show on max-w-720px and below
        "min-w-[721px]:hidden", // hide above 720px
        "shadow-2xl shadow-blue-500/20",
        visible && [
          "bg-gray-950/95",
          "border-blue-500/40",
          "shadow-blue-500/30",
        ],
        className
      )}
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-50 pointer-events-none" />

      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
          className={cn(
            "absolute inset-x-0 top-20 z-50 flex w-full flex-col items-start justify-start gap-2 rounded-2xl bg-gray-950/95 backdrop-blur-md border border-blue-500/30 px-6 py-6 shadow-2xl shadow-blue-500/20",
            "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-blue-500/5 before:to-purple-500/5 before:opacity-50",
            className
          )}
        >
          {/* Close button overlay */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
            onClick={onClose}
          />

          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full flex items-center justify-center hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group"
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <IconX
              size={18}
              className="text-blue-300 group-hover:text-blue-400 transition-colors duration-200"
            />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <IconMenu2
              size={18}
              className="text-blue-300 group-hover:text-blue-400 transition-colors duration-200"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background pulse effect */}
      <div className="absolute inset-0 rounded-full bg-blue-500/20 opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" />
    </motion.button>
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#home"
      className="relative z-20 mr-4 flex items-center space-x-3 px-2 py-1 text-sm font-normal text-foreground hover:text-primary transition-all duration-300 group"
    >
      <div className="relative">
        <Avatar className="ring-2 ring-blue-500/30 group-hover:ring-blue-400/50 transition-all duration-300">
          <AvatarImage
            src={
              "https://res.cloudinary.com/rdisexc23ed/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1719936876/Portfolio/about/avatar/nkp5hck2p22a4fds9g2j.jpg"
            }
            loading="lazy"
            alt="Rohit Patil"
          />
          <AvatarFallback>R</AvatarFallback>
        </Avatar>
        {/* Online Status Indicator */}
        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-950 animate-pulse"></div>
      </div>
      <div className="hidden sm:block">
        <span className="font-bold text-lg bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-cyan-300 transition-all duration-300">
          Rohit Patil
        </span>
        <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          MERN Stack Developer
        </div>
      </div>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-md text-sm font-medium relative cursor-pointer hover:-translate-y-0.5 transition-all duration-200 inline-block text-center border";

  const variantStyles = {
    primary:
      "bg-primary text-primary-foreground border-primary hover:bg-primary/90 shadow-md",
    secondary:
      "bg-secondary text-secondary-foreground border-secondary hover:bg-secondary/80",
    dark: "bg-foreground text-background border-foreground hover:bg-foreground/90 shadow-md",
    gradient:
      "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-primary hover:from-primary/90 hover:to-primary/70 shadow-md",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
