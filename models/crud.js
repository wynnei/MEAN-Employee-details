const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema({
  fullName: { type: String, require: true },
  position: { type: String, require: true },
  location: { type: String, },
  salary: { type: Number, require: true },
});

module.exports = mongoose.model("Crud",crudSchema)

