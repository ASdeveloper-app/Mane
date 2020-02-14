const {
    model,
    Schema
} = require("mongoose");


const taskSchema = new Schema({
    name: String,
    description: String,
    prioridad: {
        type: String,
        enum: ["Nula", "Media", "Alta"]
    }
}, {
    timestamps: true
});


module.exports = model("Task", userSchema);