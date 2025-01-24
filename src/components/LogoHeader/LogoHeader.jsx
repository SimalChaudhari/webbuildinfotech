import React from "react";

const LogoHeader = () => {
  return (
    <div className="flex items-center justify-center space-x-4 ">
      {/* Logo Icon */}
      <img
      src="/logo/logo2.png" // Replace with your logo path in the public folder
      alt="WebBuild Logo"
      className="w-12 sm:w-12 lg:w-16 max-w-full h-auto" // Adjust size responsively
    />
    

      {/* Text Section */}
      <div className="flex flex-col items-start">
        {/* WebBuild Text */}
        <h1
          className="text-lg font-bold tracking-wide text-black leading-tight"
          style={{
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          WEB BUILD
        </h1>

        {/* InfoTech Text */}
        <h2
          className="text-lg font-medium tracking-widest text-gray-700"
          style={{
            fontFamily: "'Roboto Mono', monospace",
            letterSpacing: "0.2em",
          }}
        >
          INFOTECH
        </h2>
      </div>
    </div>
  );
};

export default LogoHeader;
