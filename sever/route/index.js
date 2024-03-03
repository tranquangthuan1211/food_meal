const home = require("./home")
const register = require('./register')
function route(app) {
    app.use('/',home);
    app.use('/register',register)
}


module.exports = route;