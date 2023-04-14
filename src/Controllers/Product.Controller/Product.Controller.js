const { Trycatch, AppError, INVALID_REQUEST } = require("../../Middlewares");
const MODELS = require("../../Models/index");
const { UTILS, HTTP } = require("../../Utils");

class Product {
  CREATE = (req, res) => {
    res.send("Working Backend Fine");
  };

  GET = Trycatch(async (req, res) => {
    const data = await MODELS.Product.find();

    if (!data) {
      throw new AppError(INVALID_REQUEST, "No Product Found", 300);
    }

    HTTP.JSON(res, 200, data);
  });

  GET_SINGLE = Trycatch(async (req, res) => {
    const requestProductID = req.params.id;

    const data = await MODELS.Product.findById({ _id: requestProductID });

    console.log();

    if (!data) {
      throw new AppError(INVALID_REQUEST, "No Product Found", 300);
    }

    HTTP.JSON(res, 200, data);
  });

  UPDATE = (req, res) => { };

  DELETE = (req, res) => { };

  GET_SEARCH = Trycatch(async (req, res) => {
    // console.log(req.query);

    const getData = await MODELS.Product.aggregate([
      { $group: { _id: { name: "$_id", product: "$name" } }, },
    ]);
    console.log(getData);

    HTTP.JSON(res, 200, getData);
  });
}

module.exports = new Product();

// await MODELS.Product.create(newProductData)
// .then((result) => res.send("Successfully Stored Data"))
// .catch((err) => res.send("No Data has Stored"))
