const { model, Schema } = require("mongoose");

const UserScheema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActiveted: { type: Boolean, default: false },
  activationLink: { type: String },
});

module.exports = model("User", UserScheema);
