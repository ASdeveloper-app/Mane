const {
    model,
    Schema
} = require("mongoose");


const userSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: String,
    date: String,
    contact: String,
    place: String,
    description: String,
    eveType: {
        type: String,
        enum: ["Boda", "Viaje", "Fiesta"]
    },
    ideaID: {
        type: Schema.Types.ObjectId,
        ref: 'Idea'
    },
    invitadosID: {
        type: Schema.Types.ObjectId,
        ref: 'Guest'
    },
    presupuestoID: {
        type: Schema.Types.ObjectId,
        ref: 'Budget'
    },
    tareaID: {
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }
}, {
    timestamps: true
});

module.exports = model("Event", userSchema);