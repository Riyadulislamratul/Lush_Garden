import React from "react";
import GalleryImage1 from "../assets/gallery1.png";
import GalleryImage2 from "../assets/gallery2.png";
import GalleryImage3 from "../assets/gallery3.png";
import GalleryImage4 from "../assets/gallery4.png";
import GalleryImage5 from "../assets/gallery5.png";

const galleryImages = [
  {
    id: 1,
    image: GalleryImage1,
    className: "row-span-2",
  },
  {
    id: 2,
    image: GalleryImage2,
  },
  {
    id: 3,
    image: GalleryImage3,
  },
  {
    id: 4,
    image: GalleryImage4,
  },
  {
    id: 5,
    image: GalleryImage5,
  },
];

const GallerySection = () => {
  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-green-900 mb-14">
          Our Gallery View
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 cursor-pointer">
          {/* Large Left Image */}
          <div className="md:row-span-2 overflow-hidden group h-[620px]">
            <img
              src={galleryImages[0].image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
          </div>

          {/* Right Grid */}
          <div className="overflow-hidden group h-[300px]">
            <img
              src={galleryImages[1].image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />
          </div>

          <div className="overflow-hidden group h-[300px]">
            <img
              src={galleryImages[2].image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />
          </div>

          <div className="overflow-hidden group h-[300px]">
            <img
              src={galleryImages[3].image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />
          </div>

          <div className="overflow-hidden group h-[300px]">
            <img
              src={galleryImages[4].image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;