import React from "react";
import { CalendarDays, ArrowRight } from "lucide-react";
import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";

const blogs = [
  {
    title: "productive with an atmosphere of greenery",
    date: "January 20, 2023",
    desc: "An atmosphere of greenery can increase productivity in the workplace.",
    image: Blog1,
  },
  {
    title: "The benefits of plants in your room",
    date: "January 10, 2023",
    desc: "Plants in your room can bring numerous benefits and improve air quality.",
    image: Blog2,
  },
  {
    title: "Hobbyist plants in the house",
    date: "January 15, 2023",
    desc: "Having hobbyist plants in the house is a great way to bring nature indoors.",
    image: Blog3,
  },
];

const BlogSection = () => {
  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-center text-4xl font-bold text-green-900 mb-16">
          Interesting Blog To Read
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="group"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-md cursor-pointer">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[320px] object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="pt-5">
                <h3 className="font-semibold text-lg mb-3 group-hover:text-green-700 transition">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm leading-7 mb-5">
                  {blog.desc}
                </p>

                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <CalendarDays size={15} />
                    {blog.date}
                  </div>

                  <button className="flex items-center gap-2 text-green-900 font-medium hover:gap-4 transition-all cursor-pointer">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;