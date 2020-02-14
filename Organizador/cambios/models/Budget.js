const {
    model,
    Schema
} = require("mongoose");


const budgetSchema = new Schema({
 item: {},
 total: Number,
}, {
    timestamps: true
});


module.exports = model("Budget", userSchema);