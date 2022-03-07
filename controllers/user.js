const db = require("../config/db");
const User = require("../service/user")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { check, validationResult }
  = require('express-validator');
// Create and Save a new User
exports.add = async (req, res) => {
  const errors = validationResult(req);

  // If some error occurs, then this
  // block of code will run
  if (!errors.isEmpty()) {
    res.json(errors)
  }
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
  const us = await User.save(user)
  return res.send({ us })

};
// Retrieve all Users from the database.
exports.findAll = (req, res) => {

};
// Find a single User with an id
exports.findOne = async (req, res) => {
  const id = req.params.id
  console.log(id)
  const user = await User.edit(id)
  console.log(user)
};
// Update a User by the id in the request
exports.update = async (req, res) => {
  const id = req.params.id
  console.log(id)
  const user = await User.update_now(id)
  console.log(user)
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

// Find all published Users
exports.signup = async (req, res) => {
  const userName = req.body.userName
  var SALT_ROUNDS = 10;
  // const password = req.body.password
  const email = req.body.email
  const user = await User.getEmail(email);
  if (user) res.status(409).send('Tên tài khoản đã tồn tại.');
  else {
    const hashPassword = bcrypt.hashSync(req.body.password, SALT_ROUNDS);
    const newUser = {
      userName: userName,
      email: email,
      password: hashPassword,

    };
    console.log(newUser)
    const createUser = await User.save(newUser);
    if (!createUser) {
      return res
        .status(400)
        .send('Có lỗi trong quá trình tạo tài khoản, vui lòng thử lại.');
    }
    return res.send({
      username,
    });
  }
};
exports.login = async (req, res) => {

  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.getEmail(email);
    console.log(user.password)
    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json({user, token});
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
}
