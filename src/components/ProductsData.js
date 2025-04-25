export default async function ProductsData() {
  try {
    const data = await fetch("https://admin.refabry.com/api/all/product/get", {
      next: { revalidate: 60 },
    });
    const products = await data.json();
    return products;
  } catch (error) {
    return null;
  }
}
