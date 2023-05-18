
const isAdmin = async (req, res, next) =>{
    const user = req.session.userToLogged
    if(user.users_rol.name == "admin"){
        next()
        return;
    }
    next()
    return res.redirect('/')
}
module.exports = isAdmin