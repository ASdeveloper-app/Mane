const {
    model,
    Schema
} = require("mongoose");


const taskSchema = new Schema({
    description: String,
    status: {
        type: String,
        enum: ["true", "false"]
        default: false
    }
}, {
    timestamps: true
});


module.exports = model("Task", userSchema);