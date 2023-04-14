const { decode } = require("jsonwebtoken");
const { TOKEN } = require("../../Config");
const { ACCESS_TOKEN_SECRET } = require("../../Config/token.config");
const MODELS = require("../../Models");
const { JWT } = require("../../module");
const MOD = require("../../module");
const { INVALID_REQUEST } = require("../Errors/Constant.Error");
const AppError = require("../Errors/Customclass.Error");

// const jwt = require("jsonwebtoken");

exports.generateToken = (id) => {
  const token = MOD.JWT.sign({ id: id }, TOKEN.ACCESS_TOKEN_SECRET, {
    expiresIn: TOKEN.EXPIRES_IN,
  });
  return token;
};

exports.verifyJWT = (req, res, next) => {

  const authHeader = req.headers["authorization"];

  if (!authHeader)
    throw new AppError(INVALID_REQUEST, "No Access Token Recieve", 401);

  const extractToken = authHeader.split(" ")[1]; // It started with Bearer

  const tokenID = MOD.JWT.verify(extractToken, ACCESS_TOKEN_SECRET, (err, decode) => {
    if (err)
      throw new AppError(INVALID_REQUEST, "Anuthorize Access", 401);
    return decode.id;

  });

  req.userid = tokenID;

  next();

};
