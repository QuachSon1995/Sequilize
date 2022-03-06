const db = require("../config/db");
const User = require("../service/account")
const bcrypt = require('bcrypt')

// Login 
exports.login = async (req, res) => {

};
// Create and Save a new User
exports.register = async (req, res) => {
  // Validate request
  const password = bcrypt.hashSync(req.body.password, 10);
  const userName = req.body.userName
  const email = req.body.email
  const address = req.body.address
  
  const check_email = await User.findOne(email)

  if (!email || !password) return res.status(400).json({ message: "Email password cannot be blank" })
  else if (check_email) return res.status(400).json({ message: "Email already in use" })
  else {
    const user_new = { userName, email, password, address }
    console.log(user_new)
    const user_save = await User.save(user_new)
  }

  // // Create a User
  // const user = {
  //   userName: req.body.userName,
  //   email: req.body.email,
  //   password: req.body.password
  // };
  // // Save User in the database
  // const us = await User.save(user)
  // return res.send({ us })

};
// Retrieve all Users from the database.
exports.findAll = (req, res) => {

};
// Find a single User with an id
exports.findOne = (req, res) => {

};
// Update a User by the id in the request
exports.update = (req, res) => {

};
// Delete a User with the specified id in the request
exports.delete = (req, res) => {

};
// Delete all Users from the database.
exports.deleteAll = (req, res) => {

};
// Find all published Users
exports.findAllPublished = async (req, res) => {
  const user = await User.findAll()
  console.log(user)
};