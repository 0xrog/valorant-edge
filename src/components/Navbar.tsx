import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Shield, Bell } from 'lucide-react';

interface NavbarProps {
  cartItems: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg shadow-purple-900/10 border-b border-gray-800' 
        : 'bg-gray-900 border-b border-gray-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Shield className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">ValorantEdge</span>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">Features</a>
              <a href="#products" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">Products</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">Testimonials</a>
              <a href="#faq" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">FAQ</a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 relative mr-4">
              <button className="p-2 rounded-full text-gray-300 hover:text-white focus:outline-none hover:bg-gray-800 transition-colors duration-200">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                  2
                </span>
              </button>
            </div>
            <div className="flex-shrink-0 relative">
              <button className="p-2 rounded-full text-gray-300 hover:text-white focus:outline-none hover:bg-gray-800 transition-colors duration-200">
                <ShoppingCart className="h-5 w-5" />
                {cartItems > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-purple-600 rounded-full">
                    {cartItems}
                  </span>
                )}
              </button>
            </div>
            <div className="ml-4">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-purple-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:scale-105">
                Login
              </button>
            </div>
            <div className="-mr-2 flex md:hidden ml-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Features</a>
            <a href="#products" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Products</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Testimonials</a>
            <a href="#faq" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">FAQ</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;