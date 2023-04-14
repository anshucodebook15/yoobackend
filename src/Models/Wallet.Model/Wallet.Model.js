// Require mongoose
const mongoose = require("mongoose");

const schema = mongoose.Schema;

// create Schema
const WalletSchema = new schema(
    {
        twitterhandle: {
            type: String,
            unique: true
        },
        walletaddress: {
            type: String,
            unique: true
        },
    },
    {
        timestamps: true,
    }
);

// Define model with database name
const Wallet = mongoose.model("wallets", WalletSchema);

// Export Model
module.exports = Wallet;

