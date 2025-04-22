export default async function ProductsData() {
  const data = await fetch("https://admin.refabry.com/api/all/product/get", {
    cache: "no-store",
  });
  const products = await data.json();
  return products;
}
