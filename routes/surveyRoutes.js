const _ = require("lodash");
const mongoose = require("mongoose");
const { Path } = require("path-parser");
const { URL } = require("url");

const requireLogin = require("../middlewarers/requireLogin");
const requireCredits = require("../middlewarers/requireCredits");

const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("surveys");

module.exports = app => {
  app.get("/api/surveys/thanks", (req, res) => {
    res.send("Thanks for voting!");
  });

  app.post("/api/surveys/webhooks", (req, res) => {
    const p = new Path("/api/surveys/:surveyId/:choice");

    const events = _.chain(req.body)
      .map(({ url, email }) => {
        const match = p.test(new URL(url).pathname);

        if (match) {
          return { email, ...match };
        }
      })
      .compact()
      .uniqBy(({ email, surveyId }) => email + surveyId);

    res.send({});
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send();

      await survey.save();

      req.user.credits -= 1;

      const user = await req.user.save();

      res.send(user);
    } catch (e) {
      res.status(422).send(e);
    }
  });
};
