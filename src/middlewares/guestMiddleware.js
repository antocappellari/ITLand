const guestMiddleware = (req, res, next)=>{
     const user = req.session.userToLogged;
     if (user) {
        return res.redirect('/users/profile')
     }
     next()
}
module.exports = guestMiddleware