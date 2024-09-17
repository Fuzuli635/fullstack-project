require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRouter = require("./routes/workouts");
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });
app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
