import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCogs, FaIndustry, FaLaptopCode, FaBriefcase,FaHome, FaBuilding, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import styles from './Header.module.css';
import LogoHeader from '../LogoHeader/LogoHeader';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Services'); // Default active menu item
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/', icon: <FaHome />, subMenu: [] },
    {
      name: 'Services',
      path: '/services',
      icon: <FaCogs />,
      subMenu: [
        { name: 'Consulting', description: 'Expert advice and strategies.', path: '/services/consulting' },
        { name: 'Development', description: 'Custom software solutions.', path: '/services/development' },
        { name: 'Design', description: 'Creative and user-friendly designs.', path: '/services/design' },
      ],
    },
    {
      name: 'Industries',
      path: '/industries',
      icon: <FaIndustry />,
      subMenu: [
        { name: 'Healthcare', description: 'Innovative healthcare solutions.', path: '/industries/healthcare' },
        { name: 'Finance', description: 'Secure and scalable financial tools.', path: '/industries/finance' },
        { name: 'Retail', description: 'Empowering retail businesses.', path: '/industries/retail' },
      ],
    },
    {
      name: 'Technologies',
      path: '/technologies',
      icon: <FaLaptopCode />,
      subMenu: [
        { name: 'AI', description: 'Advanced artificial intelligence.', path: '/technologies/ai' },
        { name: 'Blockchain', description: 'Secure and transparent solutions.', path: '/technologies/blockchain' },
        { name: 'Cloud', description: 'Efficient cloud computing solutions.', path: '/technologies/cloud' },
      ],
    },
    { name: 'Career', path: '/career', icon: <FaBriefcase />, subMenu: [] },
    { name: 'Company', path: '/company', icon: <FaBuilding />, subMenu: [] },
  ];

  useEffect(() => {
    // Update active menu based on current path
    const currentPath = location.pathname;
    const activeItem = menuItems.find((item) => item.path === currentPath);
    setActiveMenu(activeItem ? activeItem.name : '');
  }, [location]);

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <header className="bg-[#d4e8f9] shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
         <LogoHeader/>
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6 relative">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setOpenSubMenu(index)}
              onMouseLeave={() => setOpenSubMenu(null)}
            >
              <Link
                to={item.path}
                className={`menu-item flex font-serif font-bold items-center text-blue-700 hover:text-black opacity-0 transition-transform transform hover:scale-110 ${activeMenu === item.name ? 'text-yellow-600 font-semibold' : ''
                  } ${styles['animate-slide-in']}`}
                style={{
                  animationDelay: `${index * 0.3}s`,
                  animationFillMode: 'forwards',
                }}
              >
                <span className="menu-icon text-blue-400 mr-2 transition-transform transform hover:rotate-360">{item.icon}</span>
                <span className="text-base">{item.name}</span>
              </Link>
              {item.subMenu.length > 0 && openSubMenu === index && (
                <div
                  className="absolute top-full left-0 mt-2 w-[400px] bg-white shadow-lg rounded-lg p-4 animate-dropdown"
                  style={{ animationFillMode: 'forwards' }}
                >
                  {item.subMenu.map((subItem, idx) => (
                    <Link
                      key={idx}
                      to={subItem.path}
                      className="flex items-start mb-4 last:mb-0 hover:bg-gray-100 p-3 rounded-md transition-transform transform hover:translate-x-1"
                    >
                      <div className="text-blue-600 text-xl mr-3">{subItem.name[0]}</div>
                      <div>
                        <h4 className="text-gray-800 font-semibold">{subItem.name}</h4>
                        <p className="text-gray-600 text-sm">{subItem.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="flex items-center px-4 py-2 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-110 bg-blue-600 text-white hover:bg-blue-700"
          >
            <FaEnvelope className="mr-2" />
            Contact
          </Link>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            {menuItems.map((item, index) => (
              <div key={index}>
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`menu-item flex items-center font-serif font-bold text-black hover:text-blue-600 opacity-0 transition-transform transform hover:scale-110 ${activeMenu === item.name ? 'text-yellow-600 font-semibold' : ''
                    } ${styles['animate-slide-in']}`}
                  style={{
                    animationDelay: `${index * 0.3}s`,
                    animationFillMode: 'forwards',
                  }}
                >
                  <span className="menu-icon text-lg mr-2 transition-transform transform hover:rotate-12">{item.icon}</span>
                  {item.name}
                </Link>
                {item.subMenu.length > 0 && (
                  <div className="ml-6 mt-2">
                    {item.subMenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-2 text-black hover:bg-blue-600 hover:text-white rounded-md"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center px-4 py-2 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-700 bg-blue-600 text-white"
            >
              <FaEnvelope className="mr-2" />
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

