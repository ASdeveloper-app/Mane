const {
    Router
} = require("express");
const {
    createEventView,
    createEvent,
    getAllEvent,
    updateEventView,
    updateEvent,
    deleteEvent,
    eventGet

} = require("../controllers/eventControllers");
const router = Router();

router
    .get("/admin/eventos/datos", createEventView)
    .post("/admin/eventos/datos", createEvent)
    // .get("/update-event/:eventId", updateEventView)
    // .post("/update-event/:eventId", updateEvent)
    // .get("/delete-event/:eventId", deleteEvent);

    .post("/:id", updateEvent)
    .get("/admin/events", getAllEvent)
    .get("/admin/eventos/:id/delete", deleteEvent)
    .get("/admin/eventos/detalle/:id/", updateEventView)
    .get("/admin/events/:id", eventGet)

module.exports = router;