const express = require("express");
const {
  createController,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();
//get all workouts
router.get("/", getWorkouts);
//Get a single workout
router.get("/:id", getWorkout);
//delete a single workout
router.delete("/:id", deleteWorkout);
//Post a new workout
router.post("/", createController);
//Update a  workout
router.patch("/:id", updateWorkout);
module.exports = router;
