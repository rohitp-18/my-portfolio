import React, { useEffect, useState } from "react";

function Spotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <>
      <div
        className="fixed inset-0 z-30 pointer-events-none transition-all duration-100 ease-out"
        style={{
          background: `
              radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                rgba(59, 130, 246, 0.15) 0%, 
                rgba(99, 102, 241, 0.1) 20%, 
                rgba(147, 51, 234, 0.05) 40%, 
                transparent 70%
              )
            `,
        }}
      />
      <div
        className="fixed inset-0 z-20 pointer-events-none transition-all duration-200 ease-out"
        style={{
          background: `
              radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                rgba(59, 130, 246, 0.2) 0%, 
                rgba(99, 102, 241, 0.1) 30%, 
                transparent 60%
              )
            `,
        }}
      />
      <div
        className="fixed inset-0 z-10 pointer-events-none transition-all duration-300 ease-out"
        style={{
          background: `
              radial-gradient(100px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                rgba(59, 130, 246, 0.3) 0%, 
                rgba(99, 102, 241, 0.15) 20%, 
                transparent 50%
              )
            `,
        }}
      />
    </>
  );
}

export default Spotlight;
