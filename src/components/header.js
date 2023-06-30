import React from 'react';
import logo from './../assets/Milmore.png'
function Header() {
  return (
    <nav className="bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="h-16" />
          </div>
          <div className="ml-8 space-x-6 text-gray-900 hover:text-white sm:ml-12 md:ml-16 lg:ml-20 xl:ml-24">
            <a href="#">Sample</a>
            <a href="#">Features</a>
            <a href="#">Layouts</a>
            <a href="#">Our Shop</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header