const express = require('express');
const {
  getAllUsers,
  getUsers,
  createUser,
  deleteUser,
  UpdateUser,
} = require('./../controllers/userController');
const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUsers).patch(UpdateUser).delete(deleteUser);

module.exports = router;
