// const express = require("express");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const authRoute = require("./routes/routes");

// const app = express();

// const port = 8080;

// app.get("/", (req, res) => {
//   res.send("Running App");
// });

// app.listen(port, () => {
//   console.log(`App running on port ${port}`);
// });

// dotenv.config();

// mongoose
//   .connect(process.env.DB_CONNECT, { useNewUrlParser: true })
//   .then(() => console.log("Database connected"))
//   .catch((error) => console.log(error));




// app.use(express.json(), cors());

// app.use("/users/", authRoute);

const express = require('express')
const app   = express()
const mongoose = require('mongoose')   //to connect to mongodb 
const dotenv = require('dotenv')   // for more secure pass etc
const authRoute= require('./routes/routes')  // authRoute is variable nd importing routes.js here
const cors = require('cors')


dotenv.config()     // activate dotenv packgage
mongoose.connect(process.env.DB_CONNECT, () => console.log("database connected is index.js "))

app.use(express.json())       //body parser
app.use(cors())                 //initialising cors
app.use('/app',authRoute)
const port = 4000; 
app.listen(port,() => {
  console.log('app  or server is running on port 8080 ${port}')
})