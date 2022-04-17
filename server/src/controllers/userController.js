const User = require("../models/User");

//PUT
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
    console.log(updatedUser);
    return res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

//DELETE
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json("User has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
};

//GET
const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    const { ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
};


//GET ALL
const getAllUser = async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find({}).sort({ _id: -1 }).limit(5)
      : await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};


//STATS
const getStats = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt"}
        }
      },
      {
        $group: {
          _id: "$month",
          total: { $sum:1 },
        }
      }
    ]);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  putUser,
  deleteUser,
  getUser,
  getAllUser,
  getStats,
};
