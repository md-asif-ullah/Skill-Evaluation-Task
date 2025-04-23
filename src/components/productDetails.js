"use client";

import { useState } from "react";
import Image from "next/image";

const ProductDetails = ({ product }) => {
  const { name, image, price, short_desc, product_images, discount_amount } =
    product[0];

  const [selectedImage, setSelectedImage] = useState(image);

  return (
    <div className="px-4 md:px-8 py-6 lg:px-10 xl:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
        {/* Image Section */}
        <div>
          <div className="w-full lg:h-[500px] xl:h-[550px] rounded-lg overflow-hidden border">
            <Image
              src={`https://admin.refabry.com/storage/product/${image}`}
              alt={name}
              width={1000}
              height={600}
              priority
              className="w-full h-auto"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4 overflow-x-auto scrollbar-thin">
            {product_images?.map((imgData) => (
              <button
                key={imgData.id}
                onClick={() => setSelectedImage(imgData.name)}
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border ${
                  selectedImage === imgData.name
                    ? "border-black"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={`https://admin.refabry.com/storage/product/${imgData.name}`}
                  alt={`${name} thumbnail`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <p className="text-2xl font-semibold text-[#f85606]">
                ৳{price - Number(discount_amount)}
              </p>
              <del className="text-gray-500 text-lg">${price}</del>
            </div>

            <div className="border-t-2 border-dashed pt-5 border-gray-200">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                Description:
              </h2>
              <p className="text-gray-600 mt-2 whitespace-pre-line">
                {short_desc}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-10">
            <button className="grow py-3 px-6 bg-orange-500 hover:bg-orange-700 rounded-md text-white cursor-pointer duration-500">
              Add To Cart
            </button>
            <button className="grow py-3 px-6 border border-gray-400 text-gray-600 rounded-md cursor-pointer">
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
