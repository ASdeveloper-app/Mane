const {
    Router
} = require("express");
const {
    invitacionView,
    perfilViewU
} = require("../controllers/guestControllers");
const router = Router();

router.get("/guest/invitacion", invitacionView);
router.get("/guest/perfil", perfilViewU);

module.exports = router;