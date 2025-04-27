const Discount_date = (Product) => {
  const currentDate = new Date();
  const currentTime = currentDate.getTime();

  const startDate = new Date(Product.discount_date);

  return startDate.getTime() < currentTime;
};

export default Discount_date;
