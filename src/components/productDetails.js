"use client";

import { useState } from "react";
import Image from "next/image";
import { useCartItemsState } from "@/app/utils/cartItemsProvider";
import Discount_date from "@/app/utils/discount_date";

const ProductDetails = ({ product }) => {
  const {
    name,
    image,
    price,
    short_desc,
    product_images,
    discount_amount,
    unique_id,
  } = product[0];

  const [selectedImage, setSelectedImage] = useState(image);
  const [quantity, setQuantity] = useState(1);
  const { cartItems, setCartItems } = useCartItemsState();

  const dicountOffer = Discount_date(product[0]);

  const handleAddToCart = () => {
    const existingItem = cartItems.find((item) => item.id === unique_id);

    if (existingItem) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === unique_id ? { ...item, quantity: quantity } : item
        )
      );
      return;
    }

    setCartItems((prev) => [
      ...prev,
      {
        id: unique_id,
        quantity,
      },
    ]);
  };

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="px-4 md:px-8 py-14 lg:px-10 xl:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
        {/* Image Section */}
        <div>
          <div className="w-full lg:h-[500px] xl:h-[550px] rounded-lg overflow-hidden border border-neutral-400">
            <Image
              src={`https://admin.refabry.com/storage/product/${selectedImage}`}
              alt={name}
              width={1000}
              height={600}
              loading="lazy"
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
                    ? "border-neutral-400"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={`https://admin.refabry.com/storage/product/${imgData.name}`}
                  alt={`${name} thumbnail`}
                  width={80}
                  height={80}
                  loading="lazy"
                  className="w-full h-full object-cover cursor-pointer"
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

            <div className="flex items-center gap-[10px]">
              <p className="text-xl font-semibold mt-1 text-[#f85606] flex items-center">
                <span className="text-xl">৳</span>
                {dicountOffer ? price - Number(discount_amount) : price}
              </p>
              {dicountOffer && (
                <del className="text-[1rem] font-normal mt-1 text-gray-500 ">
                  ${price}
                </del>
              )}
            </div>

            <div className="border-t-3 pt-2 border-gray-300">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                Description:
              </h2>
              <p className="text-gray-600 mt-2 whitespace-pre-line">
                {short_desc}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="mt-4 flex items-center gap-4">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center">
                <button
                  onClick={handleDecrease}
                  className="w-10 h-10 text-lg font-bold hover:bg-gray-200"
                >
                  -
                </button>
                <span className="w-10 text-center">{quantity}</span>
                <button
                  onClick={handleIncrease}
                  className="w-10 h-10 text-lg font-bold hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="py-3 px-3 bg-orange-500 hover:bg-orange-700 rounded-md text-white cursor-pointer duration-500"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
