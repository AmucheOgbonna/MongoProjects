const express = require('express');
// const userController = require('./../controllers/userController')
const authController = require('./../controllers/authController');
const {
  getAllUsers,
  getUsers,
  createUser,
  deleteUser,
  UpdateUser,
} = require('./../controllers/userController');
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUsers).patch(UpdateUser).delete(deleteUser);

module.exports = router;
