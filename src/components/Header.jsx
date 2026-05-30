import React from "react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
        
        {/* Logo Placeholder */}
        <div className="w-24 h-10 flex items-center justify-center text-white">
          <img src="./logo.png" alt="" />
        </div>

        <nav className="hidden md:flex items-center gap-10 text-white text-sm">
          <a
            href="#"
            className="relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1px] after:bg-white"
          >
            Home
          </a>

          <a href="#" className="hover:text-green-200 transition">
            About Us
          </a>

          <a href="#" className="hover:text-green-200 transition">
            Planters
          </a>

          <a href="#" className="hover:text-green-200 transition">
            Contact
          </a>
        </nav>

        <button className="border border-white text-white px-8 py-2 text-sm hover:bg-white hover:text-black transition-all duration-300">
          Call Us
        </button>
      </div>
    </header>
  );
};

export default Header;