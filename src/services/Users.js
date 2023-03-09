const fs = require('fs')
const path = require('path')
const userPath = path.join(__dirname, '../data/users.json')

const Users = {
    userAll(){
        return JSON.parse(fs.readFileSync(userPath, 'utf-8'))
    },
    create(user){
        let userAll = Users.userAll()  
        let newUser = {
            id: Date.now(),
            ...user
        }
        delete newUser.confirmPassword
        userAll.push(newUser)
        fs.writeFileSync(userPath,JSON.stringify(userAll, null, ' ' ))
        return true
    },
    findUser(propiedad, email){    
        let userAll = Users.userAll()               
        let userFound = userAll.find(user => user[propiedad] === email)
        return userFound
    }
}

module.exports = Users