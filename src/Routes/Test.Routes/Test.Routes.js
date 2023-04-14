const MOD = require("../../module");
const Controller = require("../../Controllers");

const Router = MOD.EXPRESS.Router();

Router.get("/test", Controller.Test.GET);
Router.get("/rawdata", Controller.Test.UPLOAD_RAW_DATA);

module.exports = Router;
