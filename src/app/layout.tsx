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
  title: "Rohit Patil | Full Stack Developer & GenAI Enthusiast",
  description:
    "Portfolio of Rohit Patil, a Full Stack Engineer specializing in MERN Stack, Next.js, and Generative AI (RAG). Building scalable web apps and intelligent AI solutions.",
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
    "Full Stack Developer",
    "GenAI Engineer",
    "MERN Stack",
    "Next.js",
    "React.js",
    "TypeScript",
    "Generative AI",
    "RAG",
    "LangChain",
    "Docker",
    "AWS",
    "Python",
    "FastAPI",
    "Software Engineer Portfolio",
  ],
  icons: {
    icon: "https://res.cloudinary.com/rdisexc23ed/image/upload/r_max/v1769272525/profile_d4p0qs.png",
    shortcut:
      "https://res.cloudinary.com/rdisexc23ed/image/upload/r_max/v1769272525/profile_d4p0qs.png",
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
