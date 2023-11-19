const express  = require('express');
const app =express();


//require('dotenv').config({path: "./.env"})

require("./config/database");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use("/", require("./routes/post.routes"))

app.listen(5000,()=>{
    console.log(`Lecture sur le port `); 
})

