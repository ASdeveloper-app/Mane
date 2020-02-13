const {
    model,
    Schema
} = require("mongoose");


const guestSchema = new Schema({
    name: String,
    lastName: String,
    email: String,
    status: {
        type: String,
        enum: ["true", "false"],
        default: false
    }
}, {
    timestamps: true
});


module.exports = model("Guest", userSchema);