const express = require('express');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: 'Success',
    results: users.length,
    //requestedAt: req.requestTime,
    data: {
      users,
    },
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is undefined',
  });
};

exports.getUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is undefined',
  });
};

exports.UpdateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is undefined',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is undefined',
  });
};
