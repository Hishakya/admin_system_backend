// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     min: 10,
//     max: 255,
//   },
//   email: {
//     type: String,
//     required: true,
//     min: 10,
//     max: 255,
//   },
//   // address: {
//   //   type: String,
//   //   required: true,
//   //   min: 10,
//   //   max: 255,
//   // },
//   password: {
//     type: String,
//     required: true,
//     min: 8,
//     max: 50,
//   },
// });

// module.exports = mongoose.model("User", userSchema);  //userschema is the name of schema see above



const mongoose = require("mongoose");

const signuptemplate = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 4,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 4,
    max: 255,
  },
  address: {
    type: String,
    required: true,
    min: 4,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 4,
    max: 50,
  },
});

module.exports = mongoose.model("User", signuptemplate);  //signuptemplate is the name of schema see above

//here ("user") is the database name shown in mongodb where ur data will save


// in body type this
// {
//   "name":"shaky1",
//   "email":"sa2@gmail.com",
//   "password":"12345"

// }
// this url for postman and data will save in mongodb dashboard
// http://localhost:4000/app/signup
// working on 8080 nd 4000 s
// (/app and /signup) from index.js annd routes.js