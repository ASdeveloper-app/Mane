const Task = require("../models/Task")

exports.tareaView = async (req, res) => {
    const {
        _id
    } = req.user
    const tareas = await Task.find({
        userID: _id
    })
    res.render("admin/event/tareas/detalle", {
        user: req.user,
        tareas
    });
};

exports.createTareaView = (req, res) => {
    res.render("admin/eventos/datos");
};

exports.createTarea = async (req, res) => {
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

exports.getAllTarea = async (req, res) => {
    const events = await Event.find();
    console.log(events)
    res.render("admin/perfil", {
        events
    })
};


exports.updateTareaView = async (req, res) => {
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

exports.updateTarea = async (req, res) => {
    const editEvent = {
        userID,
        name,
        description,
        prioridad
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