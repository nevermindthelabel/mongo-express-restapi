const mongoose = require("mongoose");

const Player = new mongoose.Schema({
  firstName: { type: String, trim: true, default: "" },
  lastName: { type: String, trim: true, default: "" },
  team: { type: String, trim: true, default: "" },
  position: { type: String, trim: true, default: "" }
});

module.exports = mongoose.model("Player", Player);
