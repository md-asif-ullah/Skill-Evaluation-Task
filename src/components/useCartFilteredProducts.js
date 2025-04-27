import Loading from "@/app/loading";
import React, { useEffect, useState } from "react";
import NotFound from "./notFound";
import { useCartItemsState } from "@/app/utils/cartItemsProvider";

const useCartFilteredProducts = () => {
  const [data, setData] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { cartItems } = useCartItemsState();

  if (!cartItems && isError) {
    NotFound({ text: "No items in cart" });
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://admin.refabry.com/api/all/product/get"
        );
        const products = await res.json();
        setData(products?.data?.data || []);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = data
    ?.filter((product) =>
      cartItems.some((item) => item.id === product.unique_id)
    )
    .map((product) => {
      const matchedCartItem = cartItems.find(
        (item) => item.id === product.unique_id
      );
      return {
        ...product,
        quantity: matchedCartItem?.quantity || 1,
      };
    });

  return {
    filteredProducts,
    isLoading,
    isError,
  };
};

export default useCartFilteredProducts;
