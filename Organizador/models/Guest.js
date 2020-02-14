const {
    model,
    Schema
} = require("mongoose");


const userSchema = new Schema({
    name: String,
    lastName: String,
    email: String
}, {
    timestamps: true
});


module.exports = model("Guest", userSchema);