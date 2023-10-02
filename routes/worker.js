const workerController = require("../controllers/worker")
const express = require("express");
const router = express.Router();
// http://localhost:3100/api/v1/users/new-user
router.post('/new-worker', workerController.createWorker);
router.get('/', workerController.getAllWorkers);
router.get('/:id', workerController.getWorkerByid);
router.patch('/:id', workerController.updateWorkerByid);
router.delete('/:id', workerController.deleteWorkerByid);
module.exports = router;