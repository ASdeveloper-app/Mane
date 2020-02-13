const {
    Router
} = require("express");
const {
    createEventView,
    createEvent,
    updateEventView,
    updateEvent,
    deleteEvent

} = require("../controllers/eventControllers");
const router = Router();

router
    .get("/admin/datos", createEventView)
    .post("/admin/datos", createEvent)
    .get("/update-event/:eventId", updateEventView)
    .post("/update-event/:eventId", updateEvent)
    .get("/delete-event/:eventId", deleteEvent);
module.exports = router;