const express = require("express");
const TutorsService = require("./tutors-service");
const { requireAuth } = require("../middleware/basic-auth");

const tutorsRouter = express.Router();

tutorsRouter.route("/").get((req, res, next) => {
  TutorsService.getAllThings(req.app.get("db"))
    .then((things) => {
      res.json(TutorsService.serializeThings(things));
    })
    .catch(next);
});
