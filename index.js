const {
  Errorhandler,
  AppError,
  INVALID_REQUEST,
} = require("./src/Middlewares");
const Server = require("./src/server");

const app = Server.serverListen();

Server.connectCors();
Server.connectCOOKIE();
Server.connectStatics();
Server.connectMongo();
Server.connectRoutes();

app.get("/", (req, res) => {
  res.send("ECOAD runs Successfully");
});

app.all("*", (req, res, next) => {
  throw new AppError(INVALID_REQUEST, "Invalid Request", 404);
});

// Error will be thrown here
app.use(Errorhandler);
