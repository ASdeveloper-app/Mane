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
    .get("/admin/eventos/tareas/datos", createTareaView)
    .post("/admin/eventos/tareas/datos", createTarea)
// .get("/update-event/:eventId", updateEventView)
// .post("/update-event/:eventId", updateEvent)
// .get("/delete-event/:eventId", deleteEvent);
router.get("admin/eventos/tareas/detalle", tareaView)

    .post("/:id", updateTarea)
    .get("/admin/eventos/tareas/detalles", getAllTarea)
    .get("/admin/eventos/tareas/detalles/:id/delete", deleteTarea)
    .get("/admin/eventos/tareas/detalles/:id/", updateTareaView)
    .get("/admin/eventos/tareas/detalles/:id", tareaGet);

module.exports = router;