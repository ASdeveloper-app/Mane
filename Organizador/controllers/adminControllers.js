exports.eventosView = (req, res) => {
  res.render("admin/eventos", {
    message: req.flash("error")
  });
};

exports.datosView = (req, res) => {
  res.render("admin/datos", {
    message: req.flash("error")
  });
};

exports.perfilView = (req, res) => {
  res.render("admin/perfil", {
    user: req.user,
    event: req.event
  });
};

exports.invitadosView = (req, res) => {
  res.render("admin/invitados", {
    message: req.flash("error")
  });
};

exports.presupuestoView = (req, res) => {
  res.render("admin/presupuesto", {
    message: req.flash("error")
  });
};

exports.tareasView = (req, res) => {
  res.render("admin/tareas", {
    message: req.flash("error")
  });
};

exports.ideasView = (req, res) => {
  res.render("admin/ideas", {
    message: req.flash("error")
  });
};