const Event = require("../models/Event")


exports.eventosView = (req, res) => {
  res.render("admin/perfil", {
    message: req.flash("error")
  });
};

exports.datosView = (req, res) => {
  res.render("admin/eventos/datos", {
    message: req.flash("error")
  });
};

exports.perfilView = async (req, res) => {
  const {
    _id
  } = req.user
  const events = await Event.find({
    userID: _id
  })
  res.render("admin/perfil", {
    user: req.user,
    events
  });
};

exports.invitadosView = (req, res) => {
  res.render("admin/eventos/invitados/detalle", {
    message: req.flash("error")
  });
};

exports.presupuestoView = (req, res) => {
  res.render("admin/presupuesto", {
    message: req.flash("error")
  });
};

exports.tareasView = (req, res) => {
  res.render("admin/eventos/tareas/tareas", {
    message: req.flash("error")
  });
};

exports.ideasView = (req, res) => {
  res.render("admin/ideas", {
    message: req.flash("error")
  });
};