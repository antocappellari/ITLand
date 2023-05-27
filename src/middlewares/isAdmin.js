
const isAdmin = async (req, res, next) =>{
    const admin = req.session.isAdmin;
    
    if(admin === undefined){
        next()
        return res.redirect('/')
    }
    next()
    return;
}
module.exports = isAdmin