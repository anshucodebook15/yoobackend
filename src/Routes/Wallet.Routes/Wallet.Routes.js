const MOD = require("../../module");
const Controller = require("../../Controllers");

const Router = MOD.EXPRESS.Router();


Router.get("/wallet", Controller.Wallet.GET)
      .post("/wallet", Controller.Wallet.CREATE)

module.exports = Router;
