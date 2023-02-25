const express = require("express");
const connectDb = require("./database/connectDb.js")

const app = express();

app.listen(8000, async()=>{

     await connectDb()
    console.log("server running at 8000")
})