const mongoose = require("mongoose");

const Team = new mongoose.Schema({
  teamName: { type: String, trim: true, default: "" },
  city: { type: String, trim: true, default: "" },
  mascot: { type: String, trim: true, default: "" },
  record: { type: Number, trim: true, default: "" }
});

module.exports = mongoose.model("Team", Team);
