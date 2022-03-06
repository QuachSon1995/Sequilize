const db = require("../config/db");
const User=require("../service/user")
// Create and Save a new User
exports.add = async (req, res) => {
  // Validate request
  if (!req.body.userName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a User
  const user = {
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password
  };
  // Save User in the database
  const us= await User.save(user)
  return res.send({us})
   
};
// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  
};
// Find a single User with an id
exports.findOne = async(req, res) => {
  const id = req.params.id
  console.log(id)
  const user = await User.edit(id)
  console.log(user)
};
// Update a User by the id in the request
exports.update = async(req, res) => {
  const id = req.params.id
  console.log(id)
  const user=await User.update_now(id)
  console.log(user)
};
// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Users
exports.findAllPublished = async(req, res) => {
    const user= await User.findAll()
    console.log(user)
};