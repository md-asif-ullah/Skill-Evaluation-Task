import Link from "next/link";

function SubCard({ filteredProducts }) {
  console.log("SubCard filteredProducts", filteredProducts);

  let subTotal = 0;
  let totalDiscount = 0;

  if (filteredProducts && filteredProducts.length > 0) {
    for (const item of filteredProducts) {
      const itemPrice = item.price || 0;
      const itemQuantity = item.quantity || 1;
      const itemSubtotal = itemPrice * itemQuantity;

      subTotal += itemSubtotal;
      console.log(item.discount_amount, itemQuantity, itemPrice, itemSubtotal);

      if (item.discount_amount) {
        totalDiscount += parseFloat(item.discount_amount) * itemQuantity;
      }
    }
  }

  console.log(subTotal, totalDiscount);

  const taxRate = 0.08; // 8% tax
  const tax = (subTotal - totalDiscount) * taxRate;
  const total = subTotal - totalDiscount + tax;

  return (
    <div className="border border-slate-200 w-full h-[400px] p-6 rounded-2xl shadow-sm bg-white lg:min-h-[340px]">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Cart Summary</h2>

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

      <Link href="/payment-info" className="block">
        <button className="w-full mt-6 py-4 text-white bg-orange-500 hover:bg-orange-600 rounded-xl text-lg font-medium transition">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}

export default SubCard;
