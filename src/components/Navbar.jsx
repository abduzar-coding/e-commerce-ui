import React from 'react';

const Navbar = ({ setMobileSidebarOpen, cart, setIsCartOpen }) => {
  return (
    <header className="w-full shadow-sm border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-800">
            <span className="text-black">Abduzar</span><span className="text-gray-500">Shop</span>
        </h1>

        <nav className="hidden md:flex space-x-6 text-sm text-gray-600">
          <a href="#" className="hover:text-black">New</a>
          <a href="#" className="hover:text-black">Men</a>
          <a href="#" className="hover:text-black">Women</a>
          <a href="#" className="hover:text-black">Kids</a>
        </nav>

        {/* Cart + Hamburger */}
        <div className="flex space-x-4 items-center">
          <button
            onClick={() => setIsCartOpen(true)}
            className="hover:text-black text-gray-600 text-sm"
          >
            Cart ({cart.length})
          </button>

          {/* Mobile menu */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileSidebarOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;