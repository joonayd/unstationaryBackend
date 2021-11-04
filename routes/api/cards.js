const express = require("express");
let router = express.Router();
let { Card } = require("../../models/card");
const multer = require("multer");
const _ = require("lodash");
const config = require("config");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./client/public/uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/add", upload.single("frontImage"), (req, res) => {
  const newCard = new Card({
    frontImage: req.file.originalname,
  });
  newCard
    .save()
    .then(() => res.json("new image posted"))
    .catch((err) => res.status(400).json(`Error:${err}`));
});

// router.post("/register", async (req, res) => {
//   let user = await User.findOne({ email: req.body.email });
//   if (user) return res.status(400).send("User with given Email already exist");
//   user = new User();
//   user.firstName = req.body.firstName;
//   user.lastName = req.body.lastName;
//   user.email = req.body.email;
//   user.password = req.body.password;
//   await user.generateHashedPassword();
//   await user.save();
//   let token = jwt.sign(
//     { _id: user._id, firstName: user.firstName, lastName: user.lastName, role: user.role },
//     config.get("jwtPrivateKey")
//   );
//   let DatatoReturn = {
//     firstName: user.firstName,
//     lastName: user.lastName,
//     email: user.email,
//     token: user.token,
//   };
//   return res.send(DatatoReturn);
// });
// router.post("/login", async (req, res) => {
//   let user = await User.findOne({ email: req.body.email });
//   if (!user) return res.status(400).send("User Not Registered");
//   let isValid = await bcrypt.compare(req.body.password, user.password);
//   if (!isValid) return res.status(401).send("Invalid Password");
//   let token = jwt.sign(
//     { _id: user._id, firstName: user.firstName, lastName: user.lastName, role: user.role },
//     config.get("jwtPrivateKey")
//   );
//   res.send(token);
// });
module.exports = router;
