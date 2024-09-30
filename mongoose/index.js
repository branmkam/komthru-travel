const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//establish connection
mongoose.connect(
  "mongodb+srv://brankam126:UMebzgdjKbMCRs2I@cluster0.whedd3h.mongodb.net/komthru",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
//switch to komthru db
const db = mongoose.connection.useDb("komthru");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    pw: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { collection: "users" }
);
const User = db.model("User", userSchema);

app.use(express.json());

const port = process.env.PORT || 4002;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB database connection established successfully");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB database connection error:", err);
});

app.use(cors()); // This will enable all CORS requests

//endpoints
app.get("/", (req, res) => {
  res.send("Komthru MongoDB API");
});

app.post("/adduser", async (req, res) => {
  try {
    console.log(req.body);
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/finduser", async (req, res) => {
  try {
    User.findOne({ username: req.body.username }).then(function (users) {
      res.send(users);
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/users", async (req, res) => {
  try {
    User.find({}).then(function (users) {
      res.send(users);
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
