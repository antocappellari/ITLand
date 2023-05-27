const userServices = require("../services/userServices");
const userToLoggedMiddleware = async (req, res, next) => {
  res.locals.isLogged = false;
  res.locals.isAdmin = false;
  const user = req.cookies.user;
  const admin = req.cookies.admin;
  if (admin) {
      const superAdmin = await userServices.getUserByEmail(admin.email);
      req.session.isAdmin = superAdmin;
      res.locals.isAdmin = true;
      res.locals.isLogged = true;
      res.locals.userToLogged =  req.session.isAdmin 
      next()
      return 
    }

  if (user) {
    const usuario = await userServices.getUserByEmail(user.email);
    req.session.userToLogged = usuario.dataValues;
  }

  if (req.session && req.session.userToLogged) {
    res.locals.isLogged = true;
    res.locals.userToLogged = req.session.userToLogged;
  }
  next();
};
module.exports = userToLoggedMiddleware;
