import React from "react";

function Loader() {
  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-950 via-slate-950 to-black flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-blue-500/30 rounded-full animate-spin mx-auto mb-6"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-t-blue-500 border-r-purple-500 border-b-cyan-500 border-l-transparent rounded-full animate-spin mx-auto"></div>
        </div>
        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
          Loading Portfolio...
        </div>
        <div className="mt-4 flex justify-center space-x-1">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
