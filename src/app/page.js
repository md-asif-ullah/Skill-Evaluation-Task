import NotFound from "@/components/notFound";
import ProductCard from "@/components/productCard";
import ProductsData from "@/components/ProductsData";

export default async function Products() {
  const products = await ProductsData();

  if (!products) return <NotFound text="products not found" />;

  console.log(products);

  return (
    <div className="bg-white w-full min-h-screen px-4 md:px-10 xl:px-20 py-10">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-20">
        {products?.data.data?.map((product) => (
          <ProductCard key={product.unique_id} product={product} />
        ))}
      </div>
    </div>
  );
}
