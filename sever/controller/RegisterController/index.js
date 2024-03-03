const Users = require('../../Model/logins')
class RegisterController {
    index (req,res){
        res.json("hello")
    }
    handleRegister (req,res) {
        console.log(req.body)
        const newUser = new Users(req.body)
        newUser
        .save()
        .then(() => res.json({result:"successfully"}))
        .catch((error) => console.log(error))
    }
}

module.exports = new RegisterController()