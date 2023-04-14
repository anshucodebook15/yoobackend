const AppError = require("./Customclass.Error");

exports.Errorhandler = (error, req, res, next) => {

  if (error instanceof AppError) {
    
    return res.status(error.statusCode).send({
      status: "failed",
      data: "",
      errorMsg: error.message,
    });
  }

  return res
    .status(400)
    .send({ status: "failed", data: "", errorMsg: "something Went Wrong" });
};

// const errorHandler = (error, req, res, next) => {
//   // handle All Error Here
//   if (error instanceof AppError) {
//     return res.status(error.statusCode).json({
//       errorCode: error.errorCode,
//     });
//   }

//   return res.status(400).send("error working properly");
// };

// module.exports = errorHandler;
