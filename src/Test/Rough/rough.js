// const data = MODELS.Product.find();

const newProductData = rawdata.map((el) => {
  const data = {
    name: el.name,
    img_source: el.img_source,
    price: utils.randomPricegen(),
    currency: el.currency,
    category: el.primary_category,
    description: el.description,
  };

  return data;
});
