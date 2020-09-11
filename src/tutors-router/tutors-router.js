const express = require('express')
const TutorsService = require('./tutors-service')
const { requireAuth } = require('../middleware/basic-auth')

const TutorsRouter = express.Router()

/*
* Endpoint: /
* Returns all tutors
*/

TutorsRouter
  .route('/')
  .get((req, res, next) => {
    // console.log(req.app.get('db'))
    TutorsService.getAllTutors(req.app.get('db'))
      .then(tutors => {
        res.json(tutors)
      })
      .catch(next)
  })

/*
* Endpoint: /:tutor_id
* Returns tutor by ID
*/

TutorsRouter
  .route('/:tutor_id')
  // .all(requireAuth)
  // .all(checkTutorExists)
  .get((req, res, next) => {
    TutorsService.getById(req.app.get('db'), req.params.tutor_id)
      .then(tutor => {
        res.json(tutor)
      })
      .catch(next)
  })

/*
* Endpoint: /zip/:zipcode
* Returns all tutors in a certain ZipCode
*/


TutorsRouter.route('/zip/:zipcode')
  // .all(requireAuth)
  // .all(checkTutorExists)
  .get((req, res, next) => {
    console.log("PASS")
    TutorsService.getByZipCode(
      req.app.get('db'),
      req.params.zipcode
    )
      .then(zipcode => {
        res.json(zipcode)
      })
      .catch(next)
  })

/* async/await syntax for promises */
async function checkTutorExists(req, res, next) {
  try {
    const thing = await TutorsService.getById(
      req.app.get('db'),
      req.params.tutor_id
    )

    if (!tutor)
      return res.status(404).json({
        error: `Tutor does not exist`
      })

    res.thing = tutor
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = TutorsRouter
