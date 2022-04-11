const User = require("../models/User");

//REGISTER
module.exports = async function register(req, res) {
  const { username, email, password } = req.body;
  const newUser = new User({
    username,
    email,
    password,
  });
  
  try {
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (error) {
      return res.status(500).json(error);
  }
};

//LOGIN
module.exports = function login(req,res) {
    
}
