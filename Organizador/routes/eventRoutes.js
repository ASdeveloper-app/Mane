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
    .get("/create-event", createEventView)
    .post("/create-event", createEvent)
    .get("/update-event/:eventId", updateEventView)
    .post("/update-event/:eventId", updateEvent)
    .get("/delete-event/:eventId", deleteEvent);
module.exports = router;