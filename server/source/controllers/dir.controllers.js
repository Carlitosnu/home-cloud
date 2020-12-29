const path = require("path")
const fs = require("fs")
function createRoute(req,res,route){
    route = route.replace(/\b[-]/g,"/")
    const destination = path.resolve("./uploads/"+route)
    fs.mkdir(destination,function(err){CRcb(err,res)});
}
function CRcb(err,res){
    if(err){
        console.log(err);
        return err
    }else{
        return "Folder Created success"
    }
}

module.exports = createRoute