"use client";

import { useCartItemsState } from "@/app/utils/cartItemsProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";

function SubCard({ filteredProducts, text, formData, title }) {
  const router = useRouter();
  const { cartItems, setCartItems } = useCartItemsState(); // Get cart items from context

  // Calculate subtotal, total discount, tax, and total

  let subTotal = 0;
  let totalDiscount = 0;

  if (filteredProducts && filteredProducts.length > 0) {
    for (const item of filteredProducts) {
      const itemPrice = item.price || 0;
      const itemQuantity = item.quantity || 1;
      const itemSubtotal = itemPrice * itemQuantity;

      subTotal += itemSubtotal;

      if (item.discount_amount) {
        totalDiscount += parseFloat(item.discount_amount) * itemQuantity;
      }
    }
  }

  const taxRate = 0.08; // 8% tax
  const tax = (subTotal - totalDiscount) * taxRate;
  const total = subTotal - totalDiscount + tax;

  // Prepare product_ids and s_product_qty for the order

  let product_ids = "";
  let s_product_qty = "";

  if (cartItems && cartItems.length > 0) {
    for (const item of cartItems) {
      product_ids += item.id + ",";
      s_product_qty += item.quantity + ",";
    }
  }

  const handleOrder = async () => {
    const newOrderData = {
      product_ids,
      s_product_qty,
      c_phone: formData.phone,
      c_name: formData.firstName + " " + formData.lastName,
      courier: formData.delivery_service,
      address: formData.address,
      advance: null,
      cod_amount: subTotal,
      discount_amount: totalDiscount,
      delivery_charge: 0,
    };

    try {
      const res = await fetch(
        "https://admin.refabry.com/api/public/order/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newOrderData),
        }
      );

      const data = await res.json();

      if (data.error) {
        alert(data.error.c_phone[0]);
      }

      if (data.status) {
        router.push("/");
        setCartItems([]);
        alert("Order placed successfully");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="border border-slate-200 w-full h-[400px] p-6 rounded-2xl shadow-sm bg-white lg:min-h-[340px]">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">{title}</h2>

      <div className="space-y-4">
        <div className="flex justify-between text-slate-700">
          <span>Subtotal</span>
          <span>৳{subTotal.toFixed(2)}</span>
        </div>

        {totalDiscount > 0 && (
          <div className="flex justify-between text-green-600 font-medium">
            <span>Discount</span>
            <span>- ৳{totalDiscount.toFixed(2)}</span>
          </div>
        )}

        <div className="flex justify-between text-slate-700">
          <span>Delivery</span>
          <span className="text-green-600 font-medium">Free</span>
        </div>

        <div className="flex justify-between text-slate-700">
          <span>Tax (8%)</span>
          <span>+৳{tax.toFixed(2)}</span>
        </div>

        <hr className="border-t" />

        <div className="flex justify-between text-lg font-semibold text-slate-900">
          <span>Total</span>
          <span>৳{total.toFixed(2)}</span>
        </div>
      </div>

      {text ? (
        <button
          onClick={handleOrder}
          type="button"
          className="w-full mt-6 py-4 text-white bg-orange-500 hover:bg-orange-600 rounded-xl text-lg font-medium transition"
        >
          {text}
        </button>
      ) : (
        <Link href="/checkout" className="block">
          <button className="w-full mt-6 py-4 text-white bg-orange-500 hover:bg-orange-600 rounded-xl text-lg font-medium transition">
            Proceed to Checkout
          </button>
        </Link>
      )}
    </div>
  );
}

export default SubCard;
