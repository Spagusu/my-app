import React, { useState } from 'react';
import logo from './../assets/Milmore.png'

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-50 p-3">
      <div className="flex items-center flex-shrink-0 mr-6">
        <img src={logo} alt="logo" className="h-12" />
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-900 hover:text-blue-600 hover:border-gray-600"
          onClick={handleMenuToggle}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 2.5A2.5 2.5 0 015 0h10a2.5 2.5 0 010 5H5A2.5 2.5 0 010 2.5zm0 6A2.5 2.5 0 015 6h10a2.5 2.5 0 010 5H5a2.5 2.5 0 01-5 0zm0 6A2.5 2.5 0 015 12h10a2.5 2.5 0 010 5H5a2.5 2.5 0 01-5 0z"
            />
          </svg>
        </button>
      </div>
      <div
        className={`w-full ${isMenuOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-lg lg:flex-grow gap-6">
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-blue-700 mr-4"
          >
            Sample
          </a>
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-blue-700 mr-4"
          >
            Features
          </a>
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-blue-700 mr-4"
          >
            Layouts
          </a>
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-blue-700 mr-4"
          >
            Our Shop
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
