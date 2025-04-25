"use client";

import { useCartItemsState } from "@/app/utils/cartItemsProvider";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const { cartItems } = useCartItemsState();

  return (
    <nav className="flex items-center justify-between w-full relative bg-white px-5 md:px-10 xl:px-20 py-4 border-b border-b-neutral-400">
      <Link href="/">
        <h2 className="text-3xl font-bold text-[#f85606]">TASK</h2>
      </Link>

      <div className="relative flex items-center gap-2">
        <Link href="/cart">
          <button className="relative text-2xl cursor-pointer">
            <FiShoppingCart />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-semibold rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length || 0}
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
