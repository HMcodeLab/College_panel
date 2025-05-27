// TopCategories.jsx
import React from "react";
import { BestProducts } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";

function TopCategories() {
  return (
    <section className="p-6 lg:px-24 mt-0">
      <h1 className="main-heading mb-6">Your Recommended Courses</h1>

      <div className="gap-6 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {BestProducts.map((product) => (
          <Link key={product?.id} href={`/${product.id}`} passHref>
            <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition cursor-pointer">
              <Image
                src={product?.image}
                alt={product?.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
                width={500}
                height={300}
              />
              <h2 className="text-lg font-semibold mb-1">{product?.title}</h2>
              <p className="text-sm text-gray-600 mb-2">
                {product?.description}
              </p>
              <div className="flex items-center justify-between mt-2">
                <div>
                  <span className="text-xl font-bold text-green-600">
                    {product?.price}
                  </span>
                  <span className="text-sm line-through text-gray-400 ml-2">
                    {product?.originalPrice}
                  </span>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                  {product?.discount}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Rating: ⭐ {product?.rating}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default TopCategories;
