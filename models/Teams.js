const mongoose = require("mongoose");

const Team = new mongoose.Schema({
  teamName: { type: String, trim: true, default: '' },
  teamState: { type: String, trim: true, default: '' },
  teamConference: { type: String, trim: true, default: '' }
});

module.exports = mongoose.model("Team", Team);
