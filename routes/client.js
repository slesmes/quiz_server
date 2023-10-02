const clientController = require("../controllers/client")
const express = require("express");
const router = express.Router();
// http://localhost:3100/api/v1/users/new-user
router.post('/new-client', clientController.createClient);
router.get('/', clientController.getAllClients);
router.get('/:id', clientController.getClientByid);
router.patch('/:id', clientController.updateClientByid);
router.delete('/:id', clientController.deleteClientByid);
module.exports = router;