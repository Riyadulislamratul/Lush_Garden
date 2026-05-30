import React from "react";
import News from "../assets/news.png";

const Newsletter = () => {
  return (
    <section
      className="relative mt-24 py-24 bg-cover bg-center"
      style={{
        backgroundImage: "url('" + News + "')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          <div>
            <h2 className="text-white text-3xl lg:text-4xl font-semibold leading-tight max-w-xl">
              Enter Your Email Address For Our Mailing Promo Or Other
              Interesting Things
            </h2>
          </div>

          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent border border-white/60 text-white placeholder:text-white/70 px-5 py-3 outline-none focus:border-green-500 transition"
            />

            <button
              type="submit"
              className="bg-green-800 text-white px-8 py-3 hover:bg-green-900 transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;