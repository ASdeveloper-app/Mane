const {
    Router
} = require("express");
const {
    createTareaView,
    createTarea,
    getAllTarea,
    updateTareaView,
    updateTarea,
    deleteTarea,
    tareaGet,
    tareaView

} = require("../controllers/tareasControllers");
const router = Router();

router
    .get("/admin/eventos/tareas/datos", createEventView)
    .post("/admin/eventos/tareas/datos", createEvent)
// .get("/update-event/:eventId", updateEventView)
// .post("/update-event/:eventId", updateEvent)
// .get("/delete-event/:eventId", deleteEvent);
router.get("/admin/eventos/tareas/detalles", perfilView)

    .post("/:id", updateEvent)
    .get("/admin/eventos/tareas/detalles", getAllEvent)
    .get("/admin/eventos/tareas/detalles/:id/delete", deleteEvent)
    .get("/admin/eventos/tareas/detalles/:id/", updateEventView)
    .get("/admin/eventos/tareas/detalles/:id", eventGet):

    module.exports = router;