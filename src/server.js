const CONFIG = require("./Config");
const MOD = require("./module");
const ROUTERS = require("./Routes");
const { UTILS, CRUD } = require("./Utils");


class Server {
  app = MOD.EXPRESS();

  serverListen = () => {
    this.app.listen(CONFIG.PORT, () => {
      UTILS.logMsg("Server Start Listen At PORT 5000");
    });
    return this.app;
  };

  connectCors = () => {
    // this.app.use(MOD.CORS({ credentials: true, origin: "http://localhost:3000" }));
    this.app.use(MOD.CORS({ credentials: true, origin: "*" }));
    UTILS.logMsg("Cors Connected");
  };

  connectCOOKIE = () => {
    this.app.use(MOD.COOKIE());
    UTILS.logMsg("Cookie Parcer Connected");
  };

  connectStatics = () => {
    this.app.use(MOD.EXPRESS.urlencoded({ extended: true }));
    this.app.use(MOD.EXPRESS.json());
    UTILS.logMsg("Statics Connected");
  };

  connectMongo = () => {
    MOD.MONGOOSE.connect(CONFIG.DB)
      .then((connect) => UTILS.logMsg("Database Connected"))
      .catch((err) => UTILS.logMsg("mongo not connected"));
  };

  connectRoutes = () => {
    this.app.use(ROUTERS);
    UTILS.logMsg("Routes Connected");
  };
}

module.exports = new Server();
