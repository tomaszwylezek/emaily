const mongoose = require("mongoose");
const requireLogin = require("../middlewarers/requireLogin");
const requireCredits = require("../middlewarers/requireCredits");

const Survey = mongoose.model("surveys");

module.exports = app => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({
        email
      })),
      _user: req.user.id,
      dateSent: Date().now()
    });
  });
};
