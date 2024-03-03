const Login = require ('../../Model/logins');
const { use } = require('../../route/register');
class HomeController {
    index (req,res) {
        res.json("hel")
    }
    handleLogin(req,res) {
        let email = req.body.email;
        let pass = req.body.pass;
        Login.findOne({ email: email })
        .then((users) => {
          console.log(users)
          // console.log(users.passWorld)
          // console.log(pass)
          if (users === null) {
            console.log('error mail')
            res.json({'result':'error Email'})
            return;
        } else if (users.passWorld !== pass) {
           console.log('error pass');
           res.json({'result':'error Pass'})
           return;
        } 
        else {
          res.cookie('userId',1234)
          console.log('thanh cong');
          users.result = 'successfully';
          res.json({result:"successfully", cookie: users.id, name:users.name});
          return;
        }
        })
        .catch((error) => {
            res.send('error');
        });
            }
}

module.exports = new HomeController()