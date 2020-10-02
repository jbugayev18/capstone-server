const express = require("express");
const TutorsService = require("./tutors-service");
const { requireAuth } = require("../middleware/basic-auth");
const TutorsRouter = express.Router();

/*
 * Endpoint: /
 * Returns all tutors
 */

TutorsRouter.route("/").get((req, res, next) => {
  TutorsService.getAllTutors(req.app.get("db"))
    .then((tutors) => {
      res.json(tutors);
    })
    .catch(next);
});

/*
 * Endpoint: /:tutor_id
 * Returns tutor by ID
 */

TutorsRouter.route("/:tutor_id").get((req, res, next) => {
  TutorsService.getById(req.app.get("db"), req.params.tutor_id)
    .then((tutor) => {
      res.json(tutor);
    })
    .catch(next);
});

/*
 * Endpoint: /zip/:zipcode
 * Returns all tutors in a certain ZipCode
 */

TutorsRouter.route("/zip/:zipcode").get((req, res, next) => {
  TutorsService.getByZipCode(req.app.get("db"), req.params.zipcode)
    .then((zipcode) => {
      res.json(zipcode);
    })
    .catch(next);
});

/* async/await syntax for promises */
async function checkTutorExists(req, res, next) {
  try {
    const tutor = await TutorsService.getById(
      req.app.get("db"),
      req.params.tutor_id
    );
    if (!tutor)
      return res.status(404).json({
        error: `Tutor does not exist`,
      });
    res.tutor = tutor;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = TutorsRouter;
