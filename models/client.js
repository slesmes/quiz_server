const mongoose = require("mongoose")
const clientSchema = mongoose.Schema({
firstname: {
    type: String,
    require: true,
},
lastname: {
    type: String,
    require: true,
},
adress:
    {
        zip_code:{
            type:String,
        },
        city:{
            type:String
        },
        municipality:{
            type:String
        },
        country:{
            type:String
        }
    },
pets: {
    type: Array,
},
work: {
    id_work:{
        type:String
    },
    job_:{
        type:String
    },
    company:{
        id_company:"",
        name_company:""
    }
}
})

const Worker = mongoose.model("Worker",WorkerSchema)
module.exports = Worker