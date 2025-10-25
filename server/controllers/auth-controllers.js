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
    console.log(req.body);
    res.status(200).send({ message: req.body });
  } catch (error) {
    res.status(400).send("page not found registration!!");
  }
};

module.exports = { home, registration };
