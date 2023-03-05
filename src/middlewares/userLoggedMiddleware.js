
const Users = require('../services/Users')

const userToLoggedMiddleware = (req, res, next)=>{
    res.locals.isLogged = false
    const userEmail = req.cookies.userEmail
    const user  = Users.findUser('email', userEmail)
    if (user) {
        req.session.userToLogged = user
    }

    if(req.session && req.session.userToLogged){ 
        res.locals.isLogged = true;
        res.locals.userToLogged = req.session.userToLogged
    }
    next()
}
module.exports = userToLoggedMiddleware