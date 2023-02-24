const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({

    destination(req, file, cb){
        console.log(path.resolve());
        let imagePath = path.resolve(__dirname, '../../public/images/products/');

        cb(null, imagePath)
    },
    filename(req, file , cb){

        let nameFile = file.fieldname + '-' + Date.now() + '-' + path.extname(file.originalname);
        cb(null, nameFile)
    }


})

const upload = multer({
    storage: storage
})

module.exports = upload