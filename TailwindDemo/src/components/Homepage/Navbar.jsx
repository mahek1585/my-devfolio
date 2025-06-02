import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold text-red-600">
              Chef's Delight
            </div>

            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-red-600 transition">Home</Link>
              <Link to="/menu" className="text-gray-700 hover:text-red-600 transition">Menu</Link>
              <Link to="/about" className="text-gray-700 hover:text-red-600 transition">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-red-600 transition">Contact</Link>
            </div>

            <div className="hidden md:block">
              <a href="#reserve" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                Reserve Now
              </a>
            </div>

            <div className="md:hidden">
              <button 
                onClick={toggleSidebar}
                className="text-gray-700 hover:text-red-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div 
          className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col h-full p-4">
            <div className="flex justify-end">
              <button 
                onClick={toggleSidebar}
                className="text-gray-700 hover:text-red-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col space-y-6 mt-8">
              <Link to="/" className="text-gray-700 text-xl hover:text-red-600 transition" onClick={toggleSidebar}>Home</Link>
              <Link to="/menu" className="text-gray-700 text-xl hover:text-red-600 transition" onClick={toggleSidebar}>Menu</Link>
              <a href="#about" className="text-gray-700 text-xl hover:text-red-600 transition" onClick={toggleSidebar}>About</a>
              <a href="#contact" className="text-gray-700 text-xl hover:text-red-600 transition" onClick={toggleSidebar}>Contact</a>
              <a href="#reserve" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition text-center mt-4" onClick={toggleSidebar}>Reserve Now</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
