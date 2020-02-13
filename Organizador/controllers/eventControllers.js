const Event = require("../models/Event");

// Read
exports.getAllEvent = async (re, res) => {
    const events = await Event.populate(users);
    res.render("home", { events });
};

// Create
exports.createEventView = (req, res) => {
    res.render("eventos");
};

exports.createEvent = async (req, res) => {
    const {
        userID,
        name,
        date,
        contact,
        place,
        description
    } = req.body;
    await Event.create({
        userID,
        name,
        date,
        contact,
        place,
        description
    });
    res.redirect("/eventos");
};
// Update
exports.updateEventView = async (req, res) => {
    const event = await Event.findById(req.params.eventId);
    res.render("eventos", event);
};

exports.updateEvent= async (req, res) => {
    const {
        userID,
        name,
        date,
        contact,
        place,
        description
    } = req.body;

    await Event.findByIdAndUpdate(req.params.eventId, {
        userID,
        name,
        date,
        contact,
        place,
        description
    });

    res.redirect("/eventos");
};


// Delete

exports.deleteEvent = async (req, res) => {
    await Event.findByIdAndDelete(req.params.userID);
    res.redirect("/eventos");
}

