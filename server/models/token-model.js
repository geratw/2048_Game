const { model, Schema } = require("mongoose");

const TokenScheema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  refreshToken: { type: String, required: true },
});

module.exports = model("Token", TokenScheema);
