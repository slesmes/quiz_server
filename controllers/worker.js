const { response } = require('../app');
const Workermodel = require('../models/worker')

const createWorker = async(req, res) => {
    try{
        const workerData = req.body;
        const newWorker = new Workermodel({...workerData});
        console.log(newWorker)
        await newWorker.save();
        res.status(201).json(newWorker);
    }catch(err){
        res.status(400).json({message: err.message})
    }
}; 
const getAllWorkers = async (req, res) => {
    try{
        const AllWorkers = await  Workermodel.find();
        res.status(200).json(AllWorkers)
    } catch(err){
        res.status(400).json({message : err.message})
    }
}
const getWorkerByid = async (req, res) => {
    try{
        const {id} = req.params;
        const workerfind = await Workermodel.findById(id);
        console.log(workerfind);
        res.status(200).json(workerfind)
    }catch(err){
        res.status(400).json({message : err.message})
    }
}
const updateWorkerByid = async (req, res) => {
    try{
        const {id} = req.params;
        const workerDataEdit = req.body;
        const response = await Workermodel.findByIdAndUpdate(id, workerDataEdit)
        res.status(200).json(response)
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

const deleteWorkerByid = async (req, res) => {
    try{
        const {id} = req.params;
        const response = await Workermodel.findByIdAndDelete(id);
        res.status(200).json({message: "usuario eliminado exitosamente"})
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

module.exports= {
    createWorker,
    getAllWorkers,
    getWorkerByid,
    updateWorkerByid,
    deleteWorkerByid,
}