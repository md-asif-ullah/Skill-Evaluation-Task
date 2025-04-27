"use client";

import Image from "next/image";

function CartTableBody({ item }) {
  const { image, name, price, discount_amount, quantity } = item;

  return (
    <tr className="border-t border-[#e2e8f0] hover:bg-gray-50 transition-all duration-300">
      <td className="py-4 px-4">
        <div className="flex items-center space-x-4">
          <Image
            src={`https://admin.refabry.com/storage/product/${image}`}
            alt={`${name} thumbnail`}
            width={20}
            height={20}
            loading="lazy"
            className="w-14 h-14 object-cover cursor-pointer"
          />
          <span className="font-semibold text-gray-800">{name}</span>
        </div>
      </td>

      <td className="py-4 px-4 text-black text-center">{quantity}</td>

      <td className="flex justify-center mt-7">
        <div className="flex items-center gap-4 mb-3">
          <p className="text-2xl font-semibold text-[#f85606]">
            ৳{price - Number(discount_amount)}
          </p>
          <del className="text-gray-500 text-lg">${price}</del>
        </div>
      </td>
    </tr>
  );
}

export default CartTableBody;
