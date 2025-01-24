import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import LogoHeader from '../LogoHeader/LogoHeader';

const FooterSection = ({ children, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation every time it enters the viewport
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out ${
        inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }} // Stagger effect
    >
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <React.Fragment>
      <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-12">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 px-6">
          {/* Company Logo and About */}
          <FooterSection index={0}>
            <div className="flex flex-col items-start">
              <LogoHeader/>
              <p className="mt-4 text-gray-700 text-lg font-medium">
                Want to talk about your project?
              </p>
              <button className="bg-blue-600 text-white px-5 py-3 mt-6 rounded-full font-semibold shadow hover:bg-blue-700 hover:shadow-lg transition">
                Schedule A Call
              </button>
            </div>
          </FooterSection>

          {/* Services Section */}
          <FooterSection index={1}>
            <div>
              <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 inline-block">
                Services
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700 text-lg">
                <li>Custom Software Development</li>
                <li>Web Application Development</li>
                <li>Mobile Application Development</li>
                <li>Support & Maintenance</li>
                <li>AI & Machine Learning</li>
              </ul>
            </div>
          </FooterSection>

          {/* Technologies Section */}
          <FooterSection index={2}>
            <div>
              <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 inline-block">
                Technologies
              </h2>
              <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 text-lg">
                <li>ReactJS</li>
                <li>AngularJS</li>
                <li>NodeJS</li>
                <li>PHP</li>
                <li>Laravel</li>
              </ul>
            </div>
          </FooterSection>

          {/* Contact Section */}
          <FooterSection index={3}>
            <div>
              <h2 className="text-xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 inline-block">
                Connect with us
              </h2>
              <ul className="mt-4 space-y-3 text-gray-700 text-lg">
                <li>
                  2nd Floor, Mox Mall, Mandvi, near Bus Station, Gujarat 394160
                </li>
                <li>
                  <span className="font-bold">Phone:</span> +91 75672 19894
                </li>
                <li>
                  <span className="font-bold">Website:</span>{' '}
                  <a
                    href="https://webbuildinfotech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    webbuildinfotech.com
                  </a>
                </li>
              </ul>
              <div className="mt-6 flex space-x-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 text-2xl"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 text-2xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 text-2xl"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 text-2xl"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </FooterSection>
        </div>
      </div>
      <FooterSection index={4}>
        <div className="footer-container">
          <p className="footer-text">
            © 2025 Web Build InfoTech. All rights reserved.
          </p>
        </div>
      </FooterSection>
    </React.Fragment>
  );
};

export default Footer;
