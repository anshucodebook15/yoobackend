const MOD = require("../../module");
const Controller = require("../../Controllers");
const { verifyJWT } = require("../../Middlewares");

const Router = MOD.EXPRESS.Router();

Router
  .post("/getuser", Controller.User.GET)
  .post("/createuser", Controller.User.CREATE)
  .get("/fetchuserbyaccesstoken", verifyJWT, Controller.User.FETCH_USER_BY_ACCESS_TOKEN)

module.exports = Router;
