const { Trycatch } = require("../../Middlewares");
const MODELS = require("../../Models");

class WalletC {
    CREATE = Trycatch(async (req, res, next) => {
        const userdata = req.body;

        // check one of these should present
        const checkit = await MODELS.Wallet.find({
            $or: [{ twitterhandle: userdata.twitterhandle }, { walletaddress: userdata.walletaddress }],
        });

        if (checkit.length > 0) {

            Response(res, 200, "Already have");

        } else {

            const data = await MODELS.Wallet.create(userdata);
            Response(res, 200, "successfully Registered");

        }

    });

    GET = async (req, res, next) => {
        const data = await MODELS.Wallet.find();
        Response(res, 200, data);
    };

}

module.exports = new WalletC();

const Response = (res, statusCode, data) => {
    res.status(statusCode).json({ success: true, data: data });
};
