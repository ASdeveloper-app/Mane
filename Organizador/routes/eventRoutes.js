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
    .get("/admin/datos", createEventView)
    .post("/admin/datos", createEvent)
    // .get("/update-event/:eventId", updateEventView)
    // .post("/update-event/:eventId", updateEvent)
    // .get("/delete-event/:eventId", deleteEvent);
    
    .post("/admin/:id", updateEvent)
    .get("/admin", getAllEvent)
    .get("/admin/:id/delet", deleteEvent)
    .get("/admin/:id/perfil", updateEventView)
    .get("/admin/:id", eventGet)

module.exports = router;