import React from "react";
import Avatar from "../assets/avatar.png";

const testimonials = [
  {
    id: 1,
    name: "Doris Watson",
    image: Avatar,
    review:
      "Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service.",
  },
  {
    id: 2,
    name: "Kate Szu",
    image: Avatar,
    review:
      "Great service, beautiful flowers, timely delivery. Highly recommend.",
  },
  {
    id: 3,
    name: "Dyness",
    image: Avatar,
    review:
      "I am very happy with my purchase from this website. The plants were healthy and arrived on time.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-green-900 mb-16">
          What Do They Say About Us
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-lg p-8 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Decorative Plant Shape */}
              <div className="absolute right-0 bottom-0 text-[180px] text-green-100 font-thin leading-none select-none">
                🌿
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border"
                  />

                  <h3 className="font-semibold text-green-900">
                    {item.name}
                  </h3>
                </div>

                <p className="text-gray-600 leading-7 text-sm">
                  "{item.review}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;