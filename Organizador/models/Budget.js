const {
    model,
    Schema
} = require("mongoose");


const budgetSchema = new Schema({
    product: String,
    quantity: Number,
    price: Number
    total: Number
}, {
    timestamps: true
});


module.exports = model("Budget", userSchema);