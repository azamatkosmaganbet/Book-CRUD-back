const { Schema, model } = require("mongoose");

const BookSchema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String},
  date: { type: Date },
  image: { type: String } 
});

module.exports = model("Book", BookSchema);
