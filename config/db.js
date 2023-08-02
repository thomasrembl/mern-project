const mongosse = require("mongoose");

mongosse
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@cluster0.b3tvuob.mongodb.net/mern-project"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
