const express = require('express');
const router = express.Router();
const primeUserController = require('../Controller/primeController');

// Route to get all primeUsers
router.get('/primeusers', primeUserController.handleGetAllprimeUsers);

// Route to get a primeUser by ID
router.post('/primeusers', primeUserController.handleCreateprimeUser);
router.put('/primeusers/:Registernumber', primeUserController.handleUpdateprimeUser);
router.delete('/primeusers/:Registernumber', primeUserController.handleDeleteprimeUser);
router.get('/primeusers/:year/:section/', primeUserController.handleGetbyYearandSection);

module.exports = router;
// Route
// module.exports = {
//     handleGetAllprimeprimeUsers,
//     handleCreateprimeprimeUser,
//     handleUpdateprimeprimeUser,
//     handleDeleteprimeprimeUser,
//     handleGetbyYearandSection
// };