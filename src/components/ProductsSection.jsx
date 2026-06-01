import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        // Replace with your API
        const res = await fetch(
          "https://dummyjson.com/products/category/home-decoration"
        );

        const data = await res.json();

        setProducts(data.products.slice(0, 8));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-green-900 mb-14">
          What We Offer To You
        </h2>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="h-[320px] bg-white rounded-lg animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Wishlist */}
                <button className="absolute z-10 top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-green-700 hover:text-white transition">
                  <Heart size={16} />
                </button>

                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-[240px] object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-medium text-green-900 mb-2">
                    {product.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                      ${product.price}
                    </p>

                    <button className="border border-green-700 text-green-700 px-4 py-2 text-xs hover:bg-green-700 hover:text-white transition">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;