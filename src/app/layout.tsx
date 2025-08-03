import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohit Patil | MERN Stack Developer",
  description:
    "Portfolio of Rohit Patil, a MERN Stack Developer, specializing in building dynamic and responsive web applications., showcasing skills in React, Node.js, and MongoDB.",
  keywords: [
    "Rohit Patil",
    "MERN Stack Developer",
    "Portfolio",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Full Stack Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Responsive Web Design",
    "Dynamic Web Applications",
    "Web Development",
    "Software Engineer",
    "Tech Portfolio",
    "Web Applications",
    "Web Design",
    "Web Development Portfolio",
    "Software Development",
    "Programming Portfolio",
    "Developer Portfolio",
    "Next.js Developer",
    "React.js Developer",
    "JavaScript Portfolio",
    "Web Technologies",
    "Frontend Technologies",
    "Backend Technologies",
    "Web Development Skills",
    "Web Development Projects",
    "Web Development Experience",
    "Web Development Career",
  ],
  icons: {
    icon: "https://res.cloudinary.com/rdisexc23ed/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1719936876/Portfolio/about/avatar/nkp5hck2p22a4fds9g2j.jpg",
    shortcut:
      "https://res.cloudinary.com/rdisexc23ed/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1719936876/Portfolio/about/avatar/nkp5hck2p22a4fds9g2j.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-br from-slate-600 via-gray-600 to-slate-700 text-foreground scroll-smooth overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
