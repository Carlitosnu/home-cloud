const express = require("express");
const cors = require("cors")
const app = express();
const file_upload = require("express-fileupload");
const indexRoter = require("./routes/index.router")
const morgan = require("morgan")
const Creator = require("./controllers/upload.controller")
// Application settings
app.set("port", process.env.PORT || 3300);
app.use("/",indexRoter)
// Application Middlewares
app.use(cors("*"));
app.use(morgan("dev"))
app.use(file_upload());
// SPECIAL ROUTES
app.post("/upload/:route", function(req,res){
    const {route} = req.params
    Creator.modulo(req,res,route)
})

// Application RUN'S
app.listen(app.get("port"),()=>{
    console.log("Servidor en 192.168.100.155:"+app.get("port"));
    console.log("o en localhost:"+app.get("port"))
})