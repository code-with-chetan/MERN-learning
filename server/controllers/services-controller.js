const Service = require("../models/service-Schema");

const services = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      res.status(401).json({ msg: "services data is not found." });
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    res.status(400).json({ msg: "services page router is not found." });
  }
};

module.exports = services;
