const userServices = require('../services/userServices');
const userToLoggedMiddleware = async (req, res, next)=>{
    res.locals.isLogged = false;
    const user = req.cookies.user
    if (user) {
        const usuario = await userServices.getUserByEmail(user.email);
        req.session.userToLogged = usuario.dataValues
    }

    if(req.session && req.session.userToLogged){ 
        res.locals.isLogged = true;
        res.locals.userToLogged = req.session.userToLogged
    }
    next()
}
module.exports = userToLoggedMiddleware