const mongoose = require("mongoose");

const Notinhas = mongoose.model("Notinhas", {
  content: String,
  rota: String,
});

module.exports = Notinhas;
