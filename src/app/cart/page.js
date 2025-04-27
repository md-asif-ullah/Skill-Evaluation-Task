"use client";

import Link from "next/link";
import NotFound from "@/components/notFound";
import CartTableBody from "@/components/CartTableBody";
import SubCard from "@/components/subCart";
import Loading from "../loading";
import useCartFilteredProducts from "@/components/useCartFilteredProducts";

function Cart() {
  const { filteredProducts, isLoading } = useCartFilteredProducts();

  if (isLoading) {
    return <Loading />;
  }

  if (!filteredProducts) {
    return <NotFound text="Product not found" />;
  }

  return (
    <div className=" bg-white pt-20 overflow-auto w-full h-screen">
      <div className="h-full text-white md:px-10 xl:px-10 lg:px-4 px-4 lg:grid space-y-7 lg:space-y-0 lg:grid-cols-3 lg:gap-x-7 ">
        <div className="col-span-2">
          <div className="border border-gray-300 text-2xl rounded-t-xl">
            <h2 className="text-start p-5">Shopping Cart</h2>
          </div>
          <table className="w-full border border-gray-300 text-sm md:text-base">
            <thead>
              <tr className="bg-[#f1f5f9] text-gray-800">
                <th className="py-3 px-4">PRODUCTS</th>
                <th className="py-3 px-4 text-center">QUANTITY</th>
                <th className="py-3 px-4 text-center">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts?.map((item) => (
                <CartTableBody key={item.id} item={item} />
              ))}
            </tbody>
          </table>

          <div className="border border-gray-300 p-5 rounded-b-xl">
            <Link href="/">
              <button className="text-[#f58220] border border-[#f58220] px-[20px] py-2 rounded-xl hover:text-white hover:bg-[#f58220] duration-700">
                Shop More
              </button>
            </Link>
          </div>
        </div>
        <SubCard filteredProducts={filteredProducts} title="Cart Summary" />
      </div>
    </div>
  );
}

export default Cart;
