const User = require("../models/User");

const putUser = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};


module.exports = {
        putUser
}