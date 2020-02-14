const {
  model,
  Schema
} = require("mongoose");


const itemSchema = new Schema({
  product: String,
  quantity: Number,
  price: Number,
  total: Number
}, {
  timestamps: true
});


module.exports = model("Item", userSchema);