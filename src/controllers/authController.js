const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//REGISTER
 const register = async (req, res) => {
  const { username, email, password } = req.body;
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.status(400).json("This is already token");
  }

  try {
    const newUser = new User({
      username,
      email,
      password,
    });
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

//LOGIN
const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(401).json("Wrong credentials!");
  }

  const ok = await bcrypt.compare(password, user.password);

  if (!ok) {
    return res.status(401).json("Wrong password!");
  }

  const { ...others } = user._doc;
  const accessToken = jwt.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SEC,
    { expiresIn: "3d" }
  );

  return res.status(200).json({...others,accessToken});
};


module.exports = {
    register,
    login
}