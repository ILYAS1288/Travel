import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <h1 className="text-3xl font-bold tracking-wide text-left">
          Ballon <br />
          <span className="text-yellow-300">TRAVELS</span>
        </h1>

        {/* Navigation Links */}
        <nav className="flex-1 flex justify-center mt-4 lg:mt-0">
          <ul className="flex space-x-6 text-lg font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-yellow-300 transition-colors duration-300 ${
                    isActive ? 'text-yellow-300 underline' : ''
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-yellow-300 transition-colors duration-300 ${
                    isActive ? 'text-yellow-300 underline' : ''
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/flights"
                className={({ isActive }) =>
                  `hover:text-yellow-300 transition-colors duration-300 ${
                    isActive ? 'text-yellow-300 underline' : ''
                  }`
                }
              >
                Flights
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destination"
                className={({ isActive }) =>
                  `hover:text-yellow-300 transition-colors duration-300 ${
                    isActive ? 'text-yellow-300 underline' : ''
                  }`
                }
              >
                Destination
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  `hover:text-yellow-300 transition-colors duration-300 ${
                    isActive ? 'text-yellow-300 underline' : ''
                  }`
                }
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-yellow-300 transition-colors duration-300 ${
                    isActive ? 'text-yellow-300 underline' : ''
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          <span>Follow us:</span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </header>

    
  );
};

export default Header;
