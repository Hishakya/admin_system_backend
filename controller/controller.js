// const User = require("../model/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const Joi = require("@hapi/joi");
// const { expression } = require("@hapi/joi");

// exports.signup = async (req, res) => {
//   const emailExist = await User.findOne({
//     emailAddress: req.body.emailAddress,
//   });
//   if (emailExist) {
//     res.send("Email Already Exists");
//     return;
//   }
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(req.body.password, salt);
//   const user = new User({
//     name: req.body.name,
//     emailAddress: req.body.email,
//     address: req.body.address,
//     password: hashedPassword,
//   });
//   try {
//     const signupSchema = Joi.object({
//       name: Joi.string().min(3).max(50).required(),
//       email: Joi.string().min(3).max(50).required().email(),
//       address: Joi.string().min(3).max(50).required(),
//       password: Joi.string().min(8).max(50).required(),
//     });
//     const { error } = await signupSchema.validateAsync(req.body);
//     if (error) {
//       res.send(error.details[0].message);
//       return;
//     } else {
//       const saveUser = await user.save();
//       res.send("User created successfully");
//     }
//   } catch (error) {
//     res.send(error);
//   }
// };

// exports.signin = async (req, res) => {
//   const user = await User.findOne({ email: req.body.email });
//   if (!user) {
//     return res.send("Incorrect Email Address");
//   }
//   const validatePassword = await bcrypt.compare(
//     req.body.password,
//     user.password
//   );
//   if (!validatePassword) {
//     return res.send("Incorrect Password");
//   }
//   try {
//     const signinSchema = Joi.object({
//       email: Joi.string().min(3).required().email(),
//       password: Joi.string().min(8).required(),
//     });
//     const { error } = await signinSchema.validateAsync(req.body);
//     if (error) {
//       return res.send(error.details[0].message);
//     } else {
//       const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
//       res.send(token);
//     }
//   } catch (error) {
//     res.send(error);
//   }
// };

// exports.getAllUsers = async (req, res) => {
//   const allUsers = await User.find();
//   try {
//     res.send(allUsers);
//   } catch (error) {
//     res.send(error);
//   }
// };