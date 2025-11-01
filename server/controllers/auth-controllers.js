const User = require("../models/user-Schema");
const bcrypt = require("bcrypt");

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

    const UserData = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(200).send({
      msg: "successfully Register",
      token: await UserData.generateToken(),
      userId: UserData._id.toString(),
    });
  } catch (error) {
    res.status(400).send("page not found registration!!");
  }
};

// login logic
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExit = await User.findOne({ email });
    if (!userExit) {
      return res.status(400).send("Invalid email");
    }

    const user = await userExit.comparedPassword(password);
    if (user) {
      res.status(200).send({
        msg: "successfully login",
        token: await userExit.generateToken(),
        userId: userExit._id.toString(),
      });
    } else {
      res.status(400).send("Invalid password");
    }
  } catch (error) {
    console.log(`login page not found`, error.message);
  }
};

// user logic
const user = async (req, res) => {
  try {
    const UserData = await req.user;
    res.status(200).json({ UserData });
  } catch (error) {
    console.log(`error from the user logic ${error}`);
  }
};

module.exports = { home, registration, login, user };
