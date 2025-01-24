import React from "react";
import { useInView } from "react-intersection-observer";

const services = [
  {
    id: "01",
    title: "Frontend Development",
    description:
      "We specialize in crafting responsive, dynamic, and visually stunning web interfaces using cutting-edge frontend technologies.",
    icon: "🌐",
    colors: "from-purple-400 to-purple-600",
  },
  {
    id: "02",
    title: "Backend Development",
    description:
      "Our backend services ensure robust, scalable, and efficient server-side solutions tailored to your business needs.",
    icon: "🔧",
    colors: "from-teal-400 to-teal-600",
  },
  {
    id: "03",
    title: "JavaScript Technologies",
    description:
      "Expertise in modern JavaScript frameworks like React, Angular, and Vue for building fast and interactive applications.",
    icon: "⚛️",
    colors: "from-blue-400 to-blue-600",
  },
  {
    id: "04",
    title: "API Development",
    description:
      "We design and implement secure, high-performance APIs to ensure seamless integration across platforms.",
    icon: "🔌",
    colors: "from-green-400 to-green-600",
  },
  {
    id: "05",
    title: "Mobile App Development",
    description:
      "Building cross-platform mobile apps with React Native, Flutter, and more to extend your business to mobile platforms.",
    icon: "📱",
    colors: "from-orange-400 to-orange-600",
  },
  {
    id: "06",
    title: "Cloud Solutions",
    description:
      "Providing scalable cloud services with AWS, Azure, and Google Cloud to power your web applications.",
    icon: "☁️",
    colors: "from-blue-400 to-blue-500",
  },
];

const ExpertiseGrid = () => {
  return (
    <div className="w-full py-12 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-6">
        <div className="text-start mb-10">
         
          <h2 className="text-3xl font-bold text-blue-800 mt-2 uppercase">
            Services
          </h2>
          <h6 className="text-lg font-semibold text-grey-400">
            Result Driven Solutions! What We Provide to Our Valued Customers
          </h6>
        </div>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ service, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow animation every time the card enters the viewport
    threshold: 0.2, // Trigger when 20% of the card is visible
  });

  return (
    <div
      ref={ref}
      className={`relative bg-white p-6 rounded-lg shadow-md overflow-hidden transform transition duration-700 ease-in-out ${
        inView
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-90"
      } hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r ${
        service.colors
      }`}
      style={{ transitionDelay: `${index * 500}ms` }} // Stagger animation
    >
      {/* Icon */}
      <div
        className={`text-5xl mb-4 transition-transform duration-500 ease-in-out hover:scale-110`}
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          transformOrigin: "center",
        }}
      >
        {service.icon}
      </div>
      {/* Number */}
      <span className="absolute top-4 right-6 text-3xl font-bold text-gray-500 transition-colors duration-500 hover:text-white">
        {service.id}
      </span>
      {/* Title */}
      <h4 className="text-xl font-semibold transition-colors duration-500 hover:text-white">
        {service.title}
      </h4>
      {/* Description */}
      <p className="mt-2 transition-colors duration-500 hover:text-white">
        {service.description}
      </p>
      {/* Link */}
      <a
        href="#"
        className="text-blue-600 font-semibold hover:underline mt-4 block transition-all duration-500 hover:text-white"
      >
        Know more →
      </a>
    </div>
  );
};

export default ExpertiseGrid;
