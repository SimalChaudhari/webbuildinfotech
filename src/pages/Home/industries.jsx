import React from 'react';

const industries = [
  { name: "Retail & Ecommerce", icon: "🛒", color: "text-blue-500" },
  { name: "Finance & Marketing", icon: "💰", color: "text-green-500" },
  { name: "Real Estate & Construction", icon: "🏠", color: "text-teal-500" },
  { name: "Food & Hospitality", icon: "🍴", color: "text-blue-500" },
  { name: "Education & Learning", icon: "🎓", color: "text-purple-500" },
  { name: "Health & Fitness", icon: "🏋️", color: "text-orange-500" },
  { name: "Startups", icon: "🚀", color: "text-pink-500" },
];

const IndustryCards = () => {
  return (
    <div className="w-full py-12 bg-gradient-to-b from-[#c0ccd6] to-[#918d8d] flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-start mb-10">
        <h2 className="text-3xl font-bold text-blue-800 mt-2 uppercase">
            Work for Any Industry
          </h2>
          <h6 className="text-lg font-semibold text-grey-400">
            Experience Across Different Industries
          </h6>
        </div>
        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out ${industry.color}`}
            >
              {/* Icon with Rotate and Reveal Animation */}
              <div className="text-4xl sm:text-5xl lg:text-6xl animate-rotate-reveal">
                {industry.icon}
              </div>
              <h4 className="mt-4 text-md sm:text-lg lg:text-xl font-semibold text-gray-800 text-center">
                {industry.name}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Keyframes for Rotate and Reveal Animation */}
      <style>
        {`
          @keyframes rotate-reveal {
            0% {
              transform: scale(0.5) rotate(0deg);
              opacity: 0;
            }
            50% {
              transform: scale(1.2) rotate(180deg);
              opacity: 0.5;
            }
            100% {
              transform: scale(1) rotate(360deg);
              opacity: 1;
            }
          }
          .animate-rotate-reveal {
            animation: rotate-reveal 4s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default IndustryCards;
