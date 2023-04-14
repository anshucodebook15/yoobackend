const { TOKEN } = require("../../Config");
const {
  Trycatch,
  AppError,
  INVALID_SUBSCRIPTION,
  INVALID_REQUEST,
  generateToken,
} = require("../../Middlewares");
const { USER_EXITS } = require("../../Middlewares/Errors/Constant.Error");
const MODELS = require("../../Models");
const MOD = require("../../module");
const { HTTP } = require("../../Utils");

class User {
  CREATE = Trycatch(async (req, res, next) => {
    const request = req.body;
    const existingUser = await MODELS.User.findOne({ email: request.email });

    if (existingUser) {
      throw new AppError(USER_EXITS, "User Already Exits", 403);
    } else {
      const newUser = await MODELS.User.create(request);
      const getNewUserAccessToken = newUser.getSignedToken();

      res.cookie("jwt", getNewUserAccessToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      HTTP.JSON(res, 200, {
        user: newUser,
        token: getNewUserAccessToken,
      });
    }
  });

  GET = Trycatch(async (req, res, next) => {
    const request = req.body;
    const existingUser = await MODELS.User.findOne({ email: request.email });

    if (!existingUser)
      throw new AppError(USER_EXITS, "No Such User Exits!", 403);

    const existingUserAccessToken = generateToken(existingUser._id);

    HTTP.cookie(res, "auth", existingUserAccessToken, TOKEN.COOKIE_EXPIRE_TIME);
    HTTP.JSON(res, 200, {
      user: existingUser,
      token: existingUserAccessToken,
    });
  });

  FETCH_USER_BY_ACCESS_TOKEN = Trycatch(async (req, res) => {
    const userid = req.userid;

    const existingUser = await MODELS.User.findOne({ _id: userid });

    if (!existingUser)
      throw new AppError(INVALID_REQUEST, "no such user exits", 401);

    const existingUserAccessToken = generateToken(existingUser._id);

    HTTP.cookie(res, "auth", existingUserAccessToken, TOKEN.COOKIE_EXPIRE_TIME);
    HTTP.JSON(res, 200, {
      user: existingUser,
      token: existingUserAccessToken,
    });
  });

  UPDATE = () => { };

  DELETE = () => { };

  CHECK_TOKEN_VAILD = Trycatch(async (req, res, next) => {
    const bodytest = req.body;
    const testNew = req.ids;

    console.log(bodytest);
    console.log(testNew);

    res.status(200).json({
      message: "Token Successfully Passed To Reach Here",
      checkthis: bodytest,
    });
  });
}

module.exports = new User();
