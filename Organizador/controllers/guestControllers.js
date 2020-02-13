exports.invitacionView = (req, res) => {
    res.render("guest/invitacion", {
        message: req.flash("error")
    });
};

exports.perfilViewU = (req, res) => {
    res.render("guest/perfil", {
        user: req.user
    });
};