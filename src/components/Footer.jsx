import React from "react";
import Facebook from "../assets/icons/fb.png";
import Instagram from "../assets/icons/ig.png";
import Twitter from "../assets/icons/twitter.png";
import FooterRight from "../assets/footer_right.png";
import FooterLeft from "../assets/footer_left.png";

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center text-white mt-24"
      style={{
        backgroundImage: "url('/footer-bg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900/90"></div>
      <div className="absolute top-34 left-0 hidden lg:block">
        <img src={FooterLeft} alt="" />
      </div>

      <div className="absolute bottom-12 right-0 hidden lg:block">
        <img src={FooterRight} alt="" />
      </div>

      <div className="relative z-10">
        
        <div className="max-w-7xl mx-auto px-6 py-20">
          
          <h2 className="text-center text-4xl font-semibold mb-12">
            Feel free to contact us
          </h2>

          {/* Socials */}
          <div className="flex justify-center gap-8 mb-14">
            {[
              <img src={Facebook} alt="" />,
              <img src={Instagram} alt="" />,
              <img src={Twitter} alt="" />,
            ].map((icon, index) => (
              <button
                key={index}
                className="w-14 h-14 rounded-full border border-white flex items-center justify-center cursor-pointer hover:text-green-900 transition-all duration-300 hover:scale-110"
              >
                {icon}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            {[
              "Home",
              "About Us",
              "Plants",
              "Delivery",
              "Blog",
              "Contact Us",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-green-200 transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 text-center py-4 text-xs bg-black text-white/70">
          Copyright © 2026 Lush. All rights reserved. Developed by Riyadul Islam Ratul
        </div>
      </div>
    </footer>
  );
};

export default Footer;