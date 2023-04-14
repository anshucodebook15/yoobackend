class HTTP_RESPONSE {
  JSON = (res, statuscode, data) => {
    res.status(statuscode).json({
      status: "success",
      data: data,
      errorMsg: "",
    });
  };

  cookie = (res, name, token, age) => {
    res.cookie(name, token, {
      // httpOnly: true,
      maxAge: age,
    });
  };
}

module.exports = new HTTP_RESPONSE();
