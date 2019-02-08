module.exports = function(req, res, next) {
  //verifica si estamos logged
  console.log(req.user);
  if (req.user) {
    return next();
  }
  //si no se loggea los redirige a la pagina de log
  return res.redirect("/login");
};
