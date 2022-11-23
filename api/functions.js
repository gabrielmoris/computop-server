// const dotenv = require("dotenv").config();

exports.first = (req, res) => {
  try {
    res.json({ result: "get in /" });
  } catch (e) {
    res.status(400);
    res.json({ "Error in /": e });
  }
};

exports.second = (req, res) => {
  const message = req.body.message;

  try {
    if (message) {
      res.json({ "This is your message": message });
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
