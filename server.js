const express = require('express');
const connectDB= require('./config/connect_db')
const app = express ();
//middleware routing body parse
app.use(express.json())

require ('dotenv').config();
const PORT = process.env.PORT
//database connection
connectDB();
//create routes
const router = require("./routes/usersRoutes");
app.use("/users", router);

app.listen(PORT, (err)=> err ? console.err(err):console.log(`server is running on ${PORT}`));