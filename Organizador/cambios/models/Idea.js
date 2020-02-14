const {
    model,
    Schema
} = require("mongoose");


const taskSchema = new Schema({
    name: String,
    description: String,
    url: eveType: {
        type: String,
        enum: ["Viajes", "Fiestas", "Bodas"]
    },
}, {
    timestamps: true
});


module.exports = model("Task", userSchema);