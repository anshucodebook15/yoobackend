const MOD = require("../../module");
const Controller = require("../../Controllers");

const Router = MOD.EXPRESS.Router();

// Router.get("/products", Controller.Product.GET);
// Router.get("/products/:id", Controller.Product.GET_SINGLE);

Router.get("/products", Controller.Product.GET)
    .get("/products/:id", Controller.Product.GET_SINGLE)
    .get("/searchproducts", Controller.Product.GET_SEARCH);

module.exports = Router;
