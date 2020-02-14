const Event = require("../models/Event");

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
    res.redirect("/admin/perfil");
};

exports.getAllEvent = async (req, res) => {
    const events = await Event.find();
    console.log(events)
    res.render("admin/perfil", {
        events
    })
};


exports.updateEventView = async (req, res) => {
    const {
        _id
    } = req.user
    const events = await Event.find({
        userID: _id
    });
    const event = await Event.findById(req.params.id);
    res.render("admin/eventos/detalle", {
        event,
        events
    });
};

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

exports.deleteEvent = async (req, res) => {
    await Event.findByIdAndDelete(req.params.id);
    res.redirect("/admin/perfil");
}

exports.eventGet = async (req, res) => {
    const eventi = await Event.findById(req.params.id)
    res.render("admin/eventos/detalle", eventi)
}