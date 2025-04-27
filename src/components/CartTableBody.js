"use client";

import Discount_date from "@/app/utils/discount_date";
import Image from "next/image";

function CartTableBody({ item }) {
  const { image, name, price, discount_amount, quantity } = item;

  const dicountOffer = Discount_date(item);

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
        <div className="flex items-center gap-[10px]">
          <p className="text-xl font-semibold mt-1 text-[#f85606] flex items-center">
            <span className="text-xl">৳</span>
            {dicountOffer ? price - Number(discount_amount) : price}
          </p>
          {dicountOffer && (
            <del className="text-[1rem] font-normal mt-1 text-gray-500 ">
              {price}
            </del>
          )}
        </div>
      </td>
    </tr>
  );
}

export default CartTableBody;
