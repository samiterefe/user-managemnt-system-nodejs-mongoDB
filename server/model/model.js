const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    email : {
        type: String, 
        required: true
    },
    gender : String,
    status : String
    
})

const User= mongoose.model('user', Schema) 

module.exports = User;