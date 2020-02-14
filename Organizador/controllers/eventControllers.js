const Event = require("../models/Event");

// Create celebrity newget
exports.createEventView = (req, res) => {
    res.render("admin/eventos/datos");
};

exports.createEvent = async (req, res) => {
    const {
        _id
    } = req.user
    const {
        name,
        date,
        contact,
        place,
        description,
        eveType
    } = req.body;
    const newEvent = {
        userID: _id,
        name,
        date,
        contact,
        place,
        description,
        eveType
    };
    await Event.create(newEvent)
    res.redirect("/admin/perfil"); //checar ruta de regreso
};

// Read celebrities get
exports.getAllEvent = async (req, res) => {
    const events = await Event.find();
    console.log(events)
    res.render("admin/perfil", {
        events
    })
};


// Update probar.id celebrity editget
exports.updateEventView = async (req, res) => {
    const event = await Event.findById(req.params.id);
    res.render("admin/eventos/detalle", event);
};
//celebrity editPost
exports.updateEvent = async (req, res) => {
    const editEvent = {
        userID,
        name,
        date,
        contact,
        place,
        description
    } = req.body;

    await Event.findByIdAndUpdate(req.params.eventId, editEvent)
    res.redirect("admin/eventos/detalle");
};


// Delete celebrity delget
exports.deleteEvent = async (req, res) => {
    await Event.findByIdAndDelete(req.params.id);
    res.redirect("/admin/perfil");
}

exports.eventGet = async (req, res) => {
    const eventi = await Event.findById(req.params.id)
    res.render("admin/eventos/detalle", eventi)
}