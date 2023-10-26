// console.log("Hello world"); //type node filename to run
const express = require("express");//importing express
const mongoose = require("mongoose");
const app = express(); //assigning variable

mongoose
.connect("mongodb+srv://vidhisha2003:Vidhisha0530@cluster30.6tdqwzt.mongodb.net/")
.then(() => {
    console.log("Server connected");
})
.catch((err) => {
    console.log(err,"Not connected");
});

app.get("/test",(req, res)=>( //test is server name
    res.send("Test Api, testing")
));
//for getting a server
app.listen(4000,()=>(
    console.log("Server is connected")
)); // type in browser ->localhost:4000/test
//nodemon is a package which helps in autoupdating your updates
//type npx nodemon filename

//db connection


