import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header/>
      {/* Main Content */}

      <main
      className={`flex-grow ${
        location.pathname === '/' ? '' : 'container mx-auto px-6 py-4'
      }`}
    >
      {/* Outlet will render content for routes */}
      <Outlet />
    </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Layout;
