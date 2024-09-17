const express = require("express");

const router = express.Router();
//get all workouts
router.get("/", (req, res) => {
  res.json({ msg: "get all workouts" });
});
//Get a single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "get a single workout" });
});
//delete a single workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "delete a single workout" });
});
//Post a new workout
router.post("/", (req, res) => {
  res.json({ msg: "Post a new workout" });
});
//Update a  workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update  workout" });
});
module.exports = router;
