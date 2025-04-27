"use client";

import SubCard from "@/components/subCart";
import useCartFilteredProducts from "@/components/useCartFilteredProducts";
import React, { useState } from "react";
import Loading from "../loading";

const delivery_service = [
  { name: "Stead Fast", value: "steadfast" },
  { name: "Pick Up", value: "pickup" },
  { name: "DHL", value: "dhl" },
];

const CheckoutPage = () => {
  const [selectedPayment, setSelectedPayment] = useState("credit-card");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    phone: "",
    delivery_service: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSelectChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const { filteredProducts, isLoading } = useCartFilteredProducts();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="bg-white pt-20 overflow-auto w-full h-screen">
      <form className="h-full md:px-10 xl:px-10 lg:px-4 px-4 lg:grid space-y-7 lg:space-y-0 lg:grid-cols-3 lg:gap-x-7">
        {/* Billing Information */}
        <div className="space-y-8 col-span-2">
          <div className="w-full">
            <h2 className="text-[1.5rem] font-medium text-gray-700 mb-6">
              Billing Information
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="labelStyles">
                  First name
                </label>
                <input
                  placeholder="First name"
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="inputStyles"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="labelStyles">
                  Last name
                </label>
                <input
                  placeholder="Last name"
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="inputStyles"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="labelStyles">
                Company Name (Optional)
              </label>
              <input
                placeholder="Company name"
                type="text"
                id="company"
                value={formData.company}
                onChange={handleInputChange}
                className="inputStyles"
              />
            </div>

            <div>
              <label htmlFor="address" className="labelStyles">
                Address
              </label>
              <input
                placeholder="mirpur 12 ramzanessamarket"
                type="text"
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                className="inputStyles"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-full md:w-[50%]">
                <label htmlFor="phone" className="labelStyles">
                  Phone Number
                </label>
                <input
                  placeholder="Phone number"
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="inputStyles"
                  required
                />
              </div>
              <div className="w-full md:w-[50%]">
                <label htmlFor="delivery_service" className="labelStyles">
                  Delivery Service
                </label>
                <select
                  id="delivery_service"
                  value={formData.delivery_service}
                  onChange={handleSelectChange}
                  className="inputStyles"
                  required
                >
                  {delivery_service.map((service) => (
                    <option key={service.name} value={service.value}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div className="border border-gray-200 rounded-md mt-8">
            <h2 className="text-[1.2rem] font-medium text-gray-700 border-b border-gray-200 px-5 py-3">
              Payment Option
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full p-5">
              <button
                type="button"
                onClick={() => setSelectedPayment("cash")}
                className={`flex flex-col items-center justify-center p-4 border rounded-lg ${
                  selectedPayment === "cash"
                    ? "border-[#ff6900]"
                    : "border-gray-200"
                }`}
              >
                <span className="text-2xl">💵</span>
                <span className="text-[0.9rem] text-gray-700 font-[500] mt-2">
                  Cash on Delivery
                </span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedPayment("credit-card")}
                className={`flex flex-col items-center justify-center p-4 border rounded-lg ${
                  selectedPayment === "credit-card"
                    ? "border-[#ff6900]"
                    : "border-gray-200"
                }`}
              >
                <span className="text-2xl">💳</span>
                <span className="text-[0.9rem] text-gray-700 font-[500] mt-2">
                  Debit/Credit Card
                </span>
              </button>
            </div>
          </div>
        </div>
        <SubCard
          title="Order Summary"
          text="Place Order"
          formData={formData}
          filteredProducts={filteredProducts}
        />
      </form>
    </div>
  );
};

export default CheckoutPage;
