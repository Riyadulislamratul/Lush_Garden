import React from "react";
import {
  Sprout,
  Leaf,
  House,
  Scissors,
} from "lucide-react";
import featureImage from "../assets/feature.png";

const features = [
  {
    title: "Quality Product",
    description:
      "Our flowers are of the highest quality, carefully selected and sourced from reputable growers.",
    icon: <Leaf size={42} />,
  },
  {
    title: "Always Fresh",
    description:
      "Our flowers are always fresh, handpicked and delivered promptly for maximum longevity.",
    icon: <Sprout size={42} />,
  },
  {
    title: "Work Smart",
    description:
      "We work smart, using innovative techniques and technology to streamline processes.",
    icon: <House size={42} />,
  },
  {
    title: "Excellent Service",
    description:
      "We pride ourselves on providing excellent service, going above and beyond.",
    icon: <Scissors size={42} />,
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-[#f8f8f8]">
      <div className="grid lg:grid-cols-2">
        
        {/* Left Image */}
        <div className="relative min-h-[700px]">
          <img
            src={featureImage}
            alt="Plants"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Features */}
        <div className="grid sm:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-10 bg-white border border-gray-100 hover:bg-green-700 hover:text-white transition-all duration-300 group cursor-pointer"
            >
              <div className="mb-6 text-green-800 group-hover:text-white transition">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-sm leading-7 text-gray-600 group-hover:text-white/90 transition">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;