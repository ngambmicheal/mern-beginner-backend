const mongoose = require('mongoose')

const Schema = mongoose.Schema

const exerciseSchema = new Schema({
     name: {type:String, required:true},
     description: {type:String, required:true},
     data:{type:Date, require:true}
    },{
    timestamps:true
    }
)

const Exercise = mongoose.model('Exercise', exerciseSchema)
module.exports = Exercise