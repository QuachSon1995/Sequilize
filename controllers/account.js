const db = require("../config/db");
const User = require("../service/account")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { authenToken } = require("../middleware/authorization");

// refresh Token
exports.refreshToken = async (req, res) => {
  const refreshTokens="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY0NjY2NzU3N30.fc_pQt8_C8fSspA-37nZ4RVBzCNybyEUK8jjVFHCRU8"
  const refreshToken = req.body.token;
  if (!refreshToken) res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET_TOKEN_SECRET, (err, data) => {
    console.log(err, data)
    if (err) res.sendStatus(403);
    const accessToken =jwt.sign({user_id: data.user._id,email: data.email}, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'30s'})
    res.json({accessToken})
  })
}
// Login 
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!(email && password)) return res.status(400).json({ message: "Email password cannot be blank" })
    else {
      const user = await User.findOne(email);
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "2h",
          })
        const refreshToken = jwt.sign({ user_id: user._id, email }, process.env.REFRESH_TOKEN_SECRET)
        // save user token
        user.token = token;

        // user
        res.status(200).json({ user, token, refreshToken });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
// Create and Save a new User
exports.register = authenToken, async (req, res) => {
  // Validate request
  const hashPassword = bcrypt.hashSync(req.body.password, 10);
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