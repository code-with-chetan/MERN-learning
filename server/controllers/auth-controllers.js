const User = require("../models/user-Schema");

//home logic.
const home = async (req, res) => {
  try {
    res.status(200).send("hello router in express. by love.");
  } catch (error) {
    console.log(error);
  }
};

//Registration logic.
const registration = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const UserEmail = await User.findOne({ email });
    if (UserEmail) {
      return res.status(400).json({ msg: "email already exists." });
    }
    const UserData = await User.create({ username, email, phone, password });
    res.status(200).send(UserData);
  } catch (error) {
    res.status(400).send("page not found registration!!");
  }
};

module.exports = { home, registration };
