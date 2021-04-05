const { Router } = require('express');
const TaskController = require('../controllers/TaskController');
const router = Router();

// endpoints for api rest
router.get('/tasks', TaskController.list);
router.get('/tasks/:id', TaskController.findTask);
router.post('/tasks', TaskController.create);
router.put('/tasks/:id', TaskController.update);
router.delete('/tasks/:id', TaskController.delete);

module.exports = router;