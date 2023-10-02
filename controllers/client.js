const { response } = require('../app');
const clientmodel = require('../models/client')

const createClient = async(req, res) => {
    try{
        const clientData = req.body;
        const newclient = new clientmodel({...clientData});
        console.log(newclient)
        await newclient.save();
        res.status(201).json(newclient);
    }catch(err){
        res.status(400).json({message: err.message})
    }
}; 
const getAllClients = async (req, res) => {
    try{
        const Allclients = await  clientmodel.find();
        res.status(200).json(Allclients)
    } catch(err){
        res.status(400).json({message : err.message})
    }
}
const getClientByid = async (req, res) => {
    try{
        const {id} = req.params;
        const clientfind = await clientmodel.findById(id);
        console.log(clientfind);
        res.status(200).json(clientfind)
    }catch(err){
        res.status(400).json({message : err.message})
    }
}
const updateClientByid = async (req, res) => {
    try{
        const {id} = req.params;
        const clientDataEdit = req.body;
        const response = await clientmodel.findByIdAndUpdate(id, clientDataEdit)
        res.status(200).json(response)
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

const deleteClientByid = async (req, res) => {
    try{
        const {id} = req.params;
        const response = await clientmodel.findByIdAndDelete(id);
        res.status(200).json({message: "usuario eliminado exitosamente"})
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

module.exports= {
    createClient,
    getAllClients,
    getClientByid,
    updateClientByid,
    deleteClientByid,
}