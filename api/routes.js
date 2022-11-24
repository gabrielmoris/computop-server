module.exports = function (app) {
  const functions = require("./functions");
  app
    .route("/")
    .get(functions.first)
    .post(functions.second);
};
