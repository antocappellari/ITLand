const authMiddleware = (req, res, next)=>{
    let user = req.session.userToLogged
    console.log(user);
    if(!user){
        return res.redirect('/users/login');
    }
    next()
}
module.exports = authMiddleware