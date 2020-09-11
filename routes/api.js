const router = require("express").Router();
const db = require("../models");

router.post("/api/workouts", ({ body }, res) => {
  db.Exercise.create(body)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.put("/api/workouts/:id", ({ body }, res) => {
//   db.Exercise.insertMany(body)
//     .then(dbWorkouts => {
//       res.json(dbWorkouts);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.put("/api/workouts/:id", (req, res) => {
  db.Exercise.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body }})
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  db.Exercise.find({})
    .sort({ date: -1 })
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.Exercise.find({})
      .sort({ date: -1 })
      .limit(7)
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;
