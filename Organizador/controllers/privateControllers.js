// exports.changeRol = (req, res) => {
//   db.grantRolesToUser(
//     "accountUser01",
//     ["ADMIN"], {
//       w: "majority",
//       wtimeout: 4000
//     }
//   )
// };

exports.changeRol = (req, res, next) => {
  console.log(req.user)
  res.send(req.user)
  // User.findByIdAndUpdate(UserId, {
  //   $push: {
  //     role: "ADMIN"
  //   }
  // });
  // res.redirect("/admin/datos");
};
