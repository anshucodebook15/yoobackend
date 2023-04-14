class Utils {

  logMsg = (msg) => {
    console.log(msg);
  };

  randomDigitsGenerator = (digits) => {
    const number = Math.floor(Math.random() * digits) + 1;
    return number;
  };
  
}

module.exports = new Utils();
