const mongoose = require("mongoose")
const WorkerSchema = mongoose.Schema({
firstname: {
    type: String,
    require: true,
},
lastname: {
    type: String,
    require: true,
},
work:[
    {
        id_work:{
            type:String,
        },
        name_work:{
            type:String
        }
    }],
type_document: {
    type: String,
    require: true,
},
document_number: {
    type: String,
    unique: true,
}
})

const Worker = mongoose.model("Worker",WorkerSchema)
module.exports = Worker