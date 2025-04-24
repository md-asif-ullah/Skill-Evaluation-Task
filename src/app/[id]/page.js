import NotFound from "@/components/notFound";
import ProductDetails from "@/components/productDetails";
import ProductsData from "@/components/ProductsData";

const Product = async ({ params }) => {
  const { id } = await params;

  const products = await ProductsData();

  if (!products) return <NotFound text="product not found" />;

  const product = products?.data?.data.filter((item) => item.id == id);

  return (
    <div className="w-full h-full bg-white">
      <ProductDetails product={product} />
    </div>
  );
};

export default Product;
