import React from 'react';
import logo from './../assets/Milmore.png'
import icon from './../assets/magnifying glass.jpg'
function Header() {
    return (
        <nav className="bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img src={logo} className="h-16" />
                    </div>
                    <div className="ml-8 space-x-6 text-gray-900 hover:text-white ">
                        <a >Sample</a>
                        <a>Features</a>
                        <a>Layouts</a>
                        <a>Our Shop</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Header