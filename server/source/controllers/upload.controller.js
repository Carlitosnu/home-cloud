const path = require("path")
const fs = require("fs")
const modulo = function(req,res,route){
    if(req.files){
        const files = req.files.file;
        let file_name = files.name
        console.log(file_name);
        saveFile(route,files,file_name,res)
    }else{
        console.log("Not files");
        return res.send("Not files")
    }
}
function saveFile(route,file,name,res){
    route = route.replace(/\b[-]/g,"/")
    const path2 = path.resolve("./uploads/"+route)
    console.log(path2);
    file.mv(path2 + "/" +  name,function(err){cb(err,res)})
}
function cb(err,res){
    if(err){
        console.log(err);
        res.send(err)
    }else{
        res.send("File Uploaded")
    }
}
module.exports = modulo;