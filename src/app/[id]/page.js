import ProductDetails from "@/components/productDetails";
import ProductsData from "@/components/ProductsData";

const Product = async ({ params }) => {
  const { id } = await params;

  const products = await ProductsData();

  const product = products.data.data.filter((item) => item.id == id);

  return (
    <div className="w-full h-full bg-white">
      <ProductDetails product={product} />
    </div>
  );
};

export default Product;
