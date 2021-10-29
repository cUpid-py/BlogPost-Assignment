const mongoose = require("mongoose");


require("dotenv").config();


const mongoDB = process.env.URI;

mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to Database"))
  .catch((err) => console.error("MongoDB connection error: ", err));