const mongoose = require("mongoose")
const prime = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    registerNumber:{
        type:Number,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    section:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    }
})
const primeSchema = mongoose.model("prime",prime);
module.exports = primeSchema