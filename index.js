const express = require ("express");
const app = express()
const cors = require ("cors")
const mongoose = require ("mongoose")
require("dotenv").config()

const crudRoute = require("./routes/cruds")

//middleware
//pass the root url of angular app in cors
app.use(cors())
app.use(express.json())

//routing
app.use("/api/v1",crudRoute)

//start server
const Port = process.env.PORT || 5500

const start =async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DATABASE CONNECTED");
        app.listen(Port , console.log(`Server is listening on port ${Port}`))
    } catch (error) {
        console.log(error);
    }

}
start()