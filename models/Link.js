const mongoose = require('mongoose')


const LinkSchema = new mongoose.Schema({
    title: {type:String, required:true},
    description: String,
    url: {type:String, required:true},
    click: {type: Number, default:0}
})


module.exports = mongoose.model('Links',LinkSchema)

