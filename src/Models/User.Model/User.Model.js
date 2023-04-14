const { TOKEN } = require("../../Config");
const MOD = require("../../module");

const Schema = MOD.MONGOOSE.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    cart: {
      type: Array,
    },
    whislist: {
      type: Array,
    },
    phone: {
      type: Number,
    },
    history: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

// Need To Recheck Again
userSchema.methods.getSignedToken = () => {
  return MOD.JWT.sign({ id: this._id }, TOKEN.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

const User = MOD.MONGOOSE.model("User", userSchema);

module.exports = User;
