const MODELS = require("../../Models");
const MOD = require("../../module");
const amzonData = require("../../Test/rawdata/amzon.json");
const { randomDigitsGenerator } = require("../../Utils/Utils");

class TestAPI {
  CREATE = (req, res) => { };

  GET = (req, res) => {
    const getRawdigit = MOD.CRYPTO.randomBytes(64).toString("hex");

    res.send(getRawdigit);
  };

  UPLOAD_RAW_DATA = async (req, res) => {

    try {


      const newProductData = amzonData.map((el) => {
        const obj = {
          name: el.name,
          img_source: el.img_source,
          price: randomDigitsGenerator(9000),
          currency: el.currency,
          category: el.primary_category,
          description: el.description,
        };
        return obj;
      });

      // const updatedData = await MODELS.Product.create(newProductData);

      res.send(newProductData);


      // res.send(updatedData);

    } catch (error) {

      res.send(error)

    }




  };


  




}

module.exports = new TestAPI();

// name: {
//   type: String,
// },
// img_source: {
//   type: String,
// },
// price: {
//   type: Number,
// },
// currency: {
//   type: String,
// },
// category: {
//   type: String,
// },
// description: {
//   type: String,
// },
