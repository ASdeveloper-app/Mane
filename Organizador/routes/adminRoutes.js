const {
  Router
} = require("express");
const {
  eventosView,
  datosView,
  perfilView,
  invitadosView,
  presupuestoView,
  tareasView,
  ideasView

} = require("../controllers/adminControllers");
const router = Router();

const {
  getAllEvent
} = require('../controllers/eventControllers')


router.get("/admin/eventos", eventosView)
// router.get("/admin/datos", datosView);
router.get("/admin/perfil", perfilView);
router.get("/admin/eventos/invitados/detalles", invitadosView);
router.get("/admin/presupuesto", presupuestoView);
router.get("/admin/eventos/tareas/detalles", tareasView);
router.get("/admin/ideas", ideasView);

module.exports = router;