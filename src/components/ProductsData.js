export default async function ProductsData() {
  try {
    const data = await fetch("https://admin.refabry.com/api/all/product/get", {
      cache: "no-store",
    });
    const products = await data.json();
    return products;
  } catch (error) {
    return null;
  }
}
