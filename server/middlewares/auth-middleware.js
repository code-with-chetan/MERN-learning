const jwt = require("jsonwebtoken");
const User = require("../models/user-Schema");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  try {
    const jwtToken = token.replace("Bearer", "").trim();
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    const UserData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    req.user = UserData;
    req.token = token;
    req.userID = UserData._id;
    console.log(UserData);

    next();
  } catch (error) {
    res.status(401).json({ msg: "Invalid token ,not provided token" });
  }
};

module.exports = authMiddleware;
