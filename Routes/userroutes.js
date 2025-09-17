const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');

// Route to get all users
router.get('/users', userController.handleGetAllUsers);

// Route to get a user by ID
router.post('/users', userController.handleCreateUser);
router.put('/users/:Registernumber', userController.handleUpdateUser);
router.delete('/users/:Registernumber', userController.handleDeleteUser);
router.get('/users/:year/:section', userController.handleGetbyYearandSection);

module.exports = router;
// Route