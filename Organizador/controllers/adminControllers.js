
exports.datosView = (req, res) => {
  res.render("admin/datosevento", {
    message: req.flash("error")
  });
};

exports.perfilView = (req, res) => {
  res.render("admin/perfilprincipal", {
    message: req.flash("error")
  });
};
