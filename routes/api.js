const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth')
const userController = require('../controller/userController');
const projectController = require('../controller/projectController');

router.post('/registerUser',  userController.registerUser);
router.post('/loginUser', userController.loginUser);

router.post('/createProject', projectController.createProject);
router.get('/getAllProject' , projectController.getAllProjects);
router.put('/upadateProject/:id', projectController.updateProject);
router.delete('/deleteProject/:id', projectController.deleteProject);

module.exports = router;

