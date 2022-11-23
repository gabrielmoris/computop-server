const dotenv = require("dotenv").config();
const computop = require("computop-node-client");

exports.first = (req, res) => {
  try {
    res.json({
      message: "Hello World",
      encriptedMessage: computop.encryptBlowfish("Hello world"),
    });
  } catch (e) {
    res.status(400);
    res.json({ "Error in /": e });
  }
};

exports.second = (req, res) => {
  const message = req.body.message;

  try {
    if (message) {
      res.json({
        message: message,
        encriptedMessage: computop.encryptBlowfish(message),
      });
    } else {
      res.status(400);
      throw error;
    }
  } catch {
    res.status(400);
    res.json({
      "Error in /": "Insert key 'message' (your message)",
    });
  }
};
