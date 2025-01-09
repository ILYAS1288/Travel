import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <h1 className="text-3xl font-bold tracking-wide text-left">
          Ballon <br />
          <span className="text-yellow-300">TRAVELS</span>
        </h1>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-yellow-300 focus:outline-none ml-auto"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? 'absolute top-full right-0  shadow-lg rounded-lg w-48 p-4' : 'hidden'
          } lg:flex lg:flex-1 lg:justify-center lg:static lg:w-auto lg:p-0 lg:shadow-none lg:bg-transparent`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 text-lg font-medium">
            {[
              { name: 'Home', to: '/' },
              { name: 'About', to: '/about' },
              { name: 'Flights', to: '/flights' },
              { name: 'Destination', to: '/destination' },
              { name: 'Blogs', to: '/blogs' },
              { name: 'Contact', to: '/contact' },
            ].map((link) => (
              <li key={link.to} className="mt-2 lg:mt-0">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `hover:text-yellow-300 transition-colors duration-300 ${
                      isActive ? 'text-yellow-300 underline' : ''
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="hidden lg:flex items-center space-x-4 mt-4 lg:mt-0">
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
