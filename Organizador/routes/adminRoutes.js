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


router.get("/admin/eventos", eventosView)
// router.get("/admin/datos", datosView);
router.get("/admin/perfil", perfilView);
router.get("/admin/invitados", invitadosView);
router.get("/admin/presupuesto", presupuestoView);
router.get("/admin/tareas", tareasView);
router.get("/admin/ideas", ideasView);

module.exports = router;