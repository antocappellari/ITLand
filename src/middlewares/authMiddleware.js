const authMiddleware = (req, res, next)=>{
    let user = req.session.userToLogged
    if(!user){
        return res.redirect('/users/login');
    }
    next()
}
module.exports = authMiddleware