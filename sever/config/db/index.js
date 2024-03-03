const mongoose = require('mongoose')

async function connect () {
    try {
        await mongoose.connect("mongodb+srv://admin:admin1211@cluster0.9ks3hln.mongodb.net/data_customer",{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log("connect successfully!!!")
    }catch(error){
        console.log(error)
    }
}

module.exports = {connect}