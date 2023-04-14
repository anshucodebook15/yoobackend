const MOD = require("../../module");

const Schema = MOD.MONGOOSE.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
  },
  img_source: {
    type: String,
  },
  price: {
    type: Number,
  },
  currency: {
    type: String,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Product = MOD.MONGOOSE.model("Products", ProductSchema);

module.exports = Product;
